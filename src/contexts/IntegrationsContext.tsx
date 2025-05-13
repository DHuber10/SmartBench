import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '@/lib/api';

export interface Integration {
  id: string;
  provider: string;
  userId: string;
  isConnected: boolean;
  lastSyncDate?: string;
  error?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

interface IntegrationsContextType {
  integrations: Integration[];
  loading: boolean;
  error: Error | null;
  connectIntegration: (provider: string, credentials: any) => Promise<void>;
  disconnectIntegration: (integrationId: string) => Promise<void>;
  syncIntegration: (integrationId: string) => Promise<void>;
}

export const IntegrationsContext = createContext<IntegrationsContextType>({
  integrations: [],
  loading: false,
  error: null,
  connectIntegration: async () => {},
  disconnectIntegration: async () => {},
  syncIntegration: async () => {},
});

interface IntegrationsProviderProps {
  children: ReactNode;
}

export function IntegrationsProvider({ children }: IntegrationsProviderProps) {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchIntegrations = async () => {
      try {
        setLoading(true);
        
        // TEMPORARY: Use mock data instead of API call
        setTimeout(() => {
          setIntegrations([
            {
              id: 'stripe',
              provider: 'stripe',
              userId: 'test-user',
              isConnected: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 'square',
              provider: 'square',
              userId: 'test-user',
              isConnected: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 'etsy',
              provider: 'etsy',
              userId: 'test-user',
              isConnected: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 'sheets',
              provider: 'google_sheets',
              userId: 'test-user',
              isConnected: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            }
          ]);
          setLoading(false);
        }, 500);
        
        // Comment out the actual API call for now
        // const data = await api.get('/integrations');
        // setIntegrations(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch integrations'));
        setLoading(false);
      }
    };
    
    fetchIntegrations();
  }, []);

  const connectIntegration = async (provider: string, credentials: any) => {
    try {
      // For now, just simulate a successful connection
      setIntegrations(prev => 
        prev.map(integration => 
          integration.provider === provider 
            ? { ...integration, isConnected: true, updatedAt: new Date() } 
            : integration
        )
      );
      
      // Comment out the actual API call for now
      // await api.post(`/integrations/${provider}/connect`, credentials);
      // const data = await api.get('/integrations');
      // setIntegrations(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(`Failed to connect ${provider}`));
      throw err;
    }
  };

  const disconnectIntegration = async (integrationId: string) => {
    try {
      // For now, just simulate a successful disconnection
      setIntegrations(prev => 
        prev.map(integration => 
          integration.id === integrationId 
            ? { ...integration, isConnected: false, updatedAt: new Date() } 
            : integration
        )
      );
      
      // Comment out the actual API call for now
      // await api.post(`/integrations/${integrationId}/disconnect`);
      // const data = await api.get('/integrations');
      // setIntegrations(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(`Failed to disconnect integration`));
      throw err;
    }
  };

  const syncIntegration = async (integrationId: string) => {
    try {
      // For now, just simulate a successful sync
      setIntegrations(prev => 
        prev.map(integration => 
          integration.id === integrationId 
            ? { ...integration, lastSyncDate: new Date().toISOString(), updatedAt: new Date() } 
            : integration
        )
      );
      
      // Comment out the actual API call for now
      // await api.post(`/integrations/${integrationId}/sync`);
      // const data = await api.get('/integrations');
      // setIntegrations(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(`Failed to sync integration`));
      throw err;
    }
  };

  return (
    <IntegrationsContext.Provider
      value={{
        integrations,
        loading,
        error,
        connectIntegration,
        disconnectIntegration,
        syncIntegration,
      }}
    >
      {children}
    </IntegrationsContext.Provider>
  );
}

export const useIntegrationsContext = () => {
  const context = useContext(IntegrationsContext);
  if (context === undefined) {
    throw new Error('useIntegrationsContext must be used within an IntegrationsProvider');
  }
  return context;
}; 