import { useContext } from 'react';
import { IntegrationsContext } from '@/contexts/IntegrationsContext';

export function useIntegrations() {
  const context = useContext(IntegrationsContext);
  
  if (!context) {
    throw new Error('useIntegrations must be used within an IntegrationsProvider');
  }
  
  return context;
} 