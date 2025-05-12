import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const userId = req.user.id; // Assuming authentication middleware sets this
  
  try {
    // Get the user's Stripe integration
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials');
    }
    
    const supabase = createClient(
      supabaseUrl,
      supabaseKey
    );
    
    const { data: integration, error: fetchError } = await supabase
      .from('integrations')
      .select('*')
      .eq('provider', 'stripe')
      .eq('user_id', userId)
      .eq('is_connected', true)
      .single();
    
    if (fetchError || !integration) {
      return res.status(404).json({ error: 'Stripe integration not found' });
    }
    
    // Initialize Stripe with the stored API key
    const stripe = new Stripe(integration.credentials.apiKey, {
      apiVersion: '2025-04-30.basil', // Update to the latest version supported by your Stripe package
    });
    
    // Get the last sync date or default to 30 days ago
    const lastSyncDate = integration.last_sync_date 
      ? new Date(integration.last_sync_date) 
      : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    
    // Fetch charges since the last sync
    const charges = await fetchAllCharges(stripe, lastSyncDate);
    
    // Transform charges to our unified sales data format
    const salesData = transformChargesToSalesData(charges);
    
    // Store the sales data
    const { error: insertError } = await supabase
      .from('sales_data')
      .insert(salesData.map(sale => ({
        ...sale,
        user_id: userId,
        integration_id: integration.id,
      })));
    
    if (insertError) throw insertError;
    
    // Update the last sync date
    const { error: updateError } = await supabase
      .from('integrations')
      .update({
        last_sync_date: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', integration.id);
    
    if (updateError) throw updateError;
    
    return res.status(200).json({
      success: true,
      recordsImported: salesData.length,
    });
  } catch (error) {
    console.error('Error syncing Stripe data:', error);
    return res.status(500).json({
      error: 'Failed to sync Stripe data',
      message: error.message,
    });
  }
}

// Helper function to fetch all charges with pagination
async function fetchAllCharges(stripe, startDate) {
  // Explicitly type the charges array as any[]
  const charges: any[] = [];
  let hasMore = true;
  let startingAfter = null;
  
  while (hasMore) {
    // Define params as a generic object without type constraints
    const params = {
      limit: 100,
      created: { gte: Math.floor(startDate.getTime() / 1000) },
    };
    
    if (startingAfter) {
      // Add starting_after as a property to the params object
      params['starting_after'] = startingAfter;
    }
    
    const response = await stripe.charges.list(params);
    
    // Use concat instead of push with spread operator to avoid type issues
    charges.push(...(response.data || []));
    hasMore = response.has_more || false;
    
    if (response.data && response.data.length > 0) {
      startingAfter = response.data[response.data.length - 1].id;
    } else {
      hasMore = false;
    }
  }
  
  return charges;
}

// Helper function to transform Stripe charges to our sales data format
function transformChargesToSalesData(charges) {
  return charges.map(charge => ({
    external_id: charge.id,
    date: new Date(charge.created * 1000).toISOString(),
    amount: charge.amount / 100, // Convert from cents
    currency: charge.currency,
    status: charge.status,
    customer: {
      id: charge.customer,
      email: charge.billing_details?.email,
      name: charge.billing_details?.name,
    },
    items: [], // Stripe charges don't include line items by default
    source: 'stripe',
    metadata: {
      payment_method: charge.payment_method_details?.type,
      description: charge.description,
    },
  }));
} 