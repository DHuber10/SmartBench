
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isLoggedIn } from '@/lib/supabase';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authed = await isLoggedIn();
        setAuthenticated(authed);
      } catch (e) {
        setError("Authentication service unavailable");
        console.error("Auth check error:", e);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    // Loading spinner
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-16 w-16 border-4 border-smartbench-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    // Show error message when Supabase is not properly configured
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-red-600 mb-4">Configuration Error</h2>
          <p className="mb-4">
            {error}. Please make sure your Supabase environment variables are properly set.
          </p>
          <p className="text-sm text-gray-600">
            Create a .env file in the root directory with:
            <pre className="bg-gray-100 p-2 mt-2 rounded text-xs overflow-x-auto">
              VITE_SUPABASE_URL=your_supabase_url<br />
              VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
            </pre>
          </p>
          <div className="mt-4">
            <Link to="/" className="text-smartbench-blue hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    // Redirect to signin page while preserving the intended destination
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
