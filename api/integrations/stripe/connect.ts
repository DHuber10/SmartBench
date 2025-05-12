// api/integrations/stripe/connect.ts
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { apiKey } = req.body;
  const userId = req.user.id; // Assuming authentication middleware sets this
  
  if (!apiKey) {
    return res.status(400).json({ error: 'API key is required' });
  }
  
  try {
    // Use the environment variable for the Stripe API key
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    
    if (!stripeSecretKey) {
      throw new Error('Missing Stripe API key');
    }
    
    // Initialize Stripe with the API key
    // Note: We're using the user-provided API key here, not our secret key
    const stripe = new Stripe(apiKey, {
      apiVersion: '2025-04-30.basil',
    });
    
    // Test the connection with the user's API key
    await stripe.balance.retrieve();
    
    // Get Stripe account info
    const account = await stripe.accounts.retrieve('account');
    
    // Store the API key securely
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials');
    }
    
    const supabase = createClient(
      supabaseUrl,
      supabaseKey
    );
    
    // Check if integration already exists
    const { data: existingIntegration } = await supabase
      .from('integrations')
      .select('id')
      .eq('provider', 'stripe')
      .eq('user_id', userId)
      .single();
    
    if (existingIntegration) {
      // Update existing integration
      const { error } = await supabase
        .from('integrations')
        .update({
          is_connected: true,
          credentials: { apiKey }, // This should be encrypted in production
          metadata: {
            account_id: account.id,
            business_name: account.business_profile?.name,
            email: account.email,
          },
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingIntegration.id);
      
      if (error) throw error;
    } else {
      // Create new integration
      const { error } = await supabase
        .from('integrations')
        .insert({
          provider: 'stripe',
          user_id: userId,
          is_connected: true,
          credentials: { apiKey }, // This should be encrypted in production
          metadata: {
            account_id: account.id,
            business_name: account.business_profile?.name,
            email: account.email,
          },
        });
      
      if (error) throw error;
    }
    
    return res.status(200).json({
      success: true,
      accountId: account.id,
      businessName: account.business_profile?.name,
    });
  } catch (error) {
    console.error('Error connecting Stripe:', error);
    return res.status(400).json({
      error: 'Failed to connect Stripe',
      message: error.message,
    });
  }
}