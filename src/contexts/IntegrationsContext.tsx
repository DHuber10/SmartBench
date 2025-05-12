import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Integration, IntegrationProvider } from '@/models/integration';
import { api } from '@/lib/api';

interface IntegrationsContextType {
  integrations: Integration[];
  loading: boolean;
  error: Error | null;
  connectIntegration: (provider: IntegrationProvider, credentials: any) => Promise<void>;
  disconnectIntegration: (provider: IntegrationProvider) => Promise<void>;
  syncIntegration: (provider: IntegrationProvider) => Promise<void>;
  getIntegrationStatus: (provider: IntegrationProvider) => Integration | undefined;
}

const IntegrationsContext = createContext<IntegrationsContextType | undefined>(undefined);

export function IntegrationsProvider({ children }: { children: ReactNode }) {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchIntegrations = async () => {
      try {
        const data = await api.get('/integrations');
        setIntegrations(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch integrations'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchIntegrations();
  }, []);
  
  const connectIntegration = async (provider: IntegrationProvider, credentials: any) => {
    try {
      const response = await api.post(`/integrations/${provider}/connect`, credentials);
      
      // Update the integrations list with the new connection
      setIntegrations(prev => 
        prev.map(i => i.provider === provider ? { ...i, ...response, isConnected: true } : i)
      );
      
      return response;
    } catch (err) {
      throw err instanceof Error ? err : new Error(`Failed to connect ${provider}`);
    }
  };
  
  const disconnectIntegration = async (provider: IntegrationProvider) => {
    try {
      await api.post(`/integrations/${provider}/disconnect`, {});
      
      // Update the integrations list
      setIntegrations(prev => 
        prev.map(i => i.provider === provider ? { ...i, isConnected: false } : i)
      );
    } catch (err) {
      throw err instanceof Error ? err : new Error(`Failed to disconnect ${provider}`);
    }
  };
  
  const syncIntegration = async (provider: IntegrationProvider) => {
    try {
      const response = await api.post(`/integrations/${provider}/sync`, {});
      
      // Update the integration with the latest sync info
      setIntegrations(prev => 
        prev.map(i => i.provider === provider ? { ...i, lastSyncDate: new Date(), ...response } : i)
      );
      
      return response;
    } catch (err) {
      throw err instanceof Error ? err : new Error(`Failed to sync ${provider}`);
    }
  };
  
  const getIntegrationStatus = (provider: IntegrationProvider) => {
    return integrations.find(i => i.provider === provider);
  };
  
  return (
    <IntegrationsContext.Provider value={{
      integrations,
      loading,
      error,
      connectIntegration,
      disconnectIntegration,
      syncIntegration,
      getIntegrationStatus
    }}>
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