
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for required environment variables
if (
  import.meta.env.DEV && 
  (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)
) {
  console.warn(
    "⚠️ Missing Supabase environment variables!\n" +
    "Create a .env file in your project root with:\n" +
    "VITE_SUPABASE_URL=your_supabase_url\n" +
    "VITE_SUPABASE_ANON_KEY=your_supabase_anon_key\n" +
    "Get these values from your Supabase project dashboard."
  );
}

createRoot(document.getElementById("root")!).render(<App />);
