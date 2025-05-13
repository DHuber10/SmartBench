import { AppHeader } from '@/components/layout/AppHeader';
import { IntegrationsList } from '@/components/integrations/IntegrationsList';
import { IntegrationsProvider } from '@/contexts/IntegrationsContext';

export default function Integrations() {
  return (
    <div className="min-h-screen bg-smartbench-gray-light">
      <AppHeader />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
          <p className="text-muted-foreground mt-2">
            Connect your sales platforms to import data into SmartBench.
          </p>
        </div>
        
        <IntegrationsProvider>
          <IntegrationsList />
        </IntegrationsProvider>
      </main>
    </div>
  );
} 