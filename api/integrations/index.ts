import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const userId = req.user.id; // Assuming authentication middleware sets this
  
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials');
    }
    
    const supabase = createClient(
      supabaseUrl,
      supabaseKey
    );
    
    const { data, error } = await supabase
      .from('integrations')
      .select('*')
      .eq('user_id', userId);
    
    if (error) throw error;
    
    // Transform to camelCase for frontend
    const integrations = data.map(integration => ({
      id: integration.id,
      provider: integration.provider,
      userId: integration.user_id,
      isConnected: integration.is_connected,
      lastSyncDate: integration.last_sync_date,
      error: integration.error,
      metadata: integration.metadata,
      createdAt: integration.created_at,
      updatedAt: integration.updated_at,
    }));
    
    // If no integrations exist yet, return available ones
    if (integrations.length === 0) {
      return res.status(200).json([
        {
          id: 'stripe',
          provider: 'stripe',
          userId: userId,
          isConnected: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add other available integrations
      ]);
    }
    
    return res.status(200).json(integrations);
  } catch (error) {
    console.error('Error fetching integrations:', error);
    return res.status(500).json({
      error: 'Failed to fetch integrations',
      message: error.message,
    });
  }
} 