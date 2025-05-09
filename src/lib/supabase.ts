
import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if Supabase environment variables are available
if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Missing Supabase environment variables. Make sure to create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY"
  );
}

// Create Supabase client with available credentials
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseKey || 'placeholder-key'
);

// Helper to get current user
export const getCurrentUser = async () => {
  if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase not configured properly");
    return null;
  }
  
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
};

// Helper to check if user is logged in
export const isLoggedIn = async () => {
  if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase not configured properly");
    return false;
  }
  
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  } catch (error) {
    console.error("Error checking authentication status:", error);
    return false;
  }
};
