// api/test-db.ts
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials');
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Test query to check if tables exist
    const { data, error } = await supabase
      .from('integrations')
      .select('count')
      .limit(1);
    
    if (error) throw error;
    
    return res.status(200).json({ 
      success: true, 
      message: 'Database connection successful',
      data
    });
  } catch (error) {
    console.error('Database test error:', error);
    return res.status(500).json({
      error: 'Database connection failed',
      message: error.message,
    });
  }
}
