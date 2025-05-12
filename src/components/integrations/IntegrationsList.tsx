import { useEffect, useState } from 'react';
import { IntegrationCard } from './IntegrationCard';
import { StripeConnect } from './stripe/StripeConnect';
import { useIntegrations } from '@/hooks/use-integrations';

interface IntegrationsListProps {
  onError?: (error: Error) => React.ReactNode;
}

export function IntegrationsList({ onError }: IntegrationsListProps) {
  const { integrations, loading, error } = useIntegrations();
  
  if (loading) return <div className="text-center py-8">Loading available integrations...</div>;
  
  if (error) {
    return onError ? 
      <>{onError(error)}</> : 
      <div className="text-red-500">Error loading integrations: {error.message}</div>;
  }
  
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <IntegrationCard
        name="Stripe"
        description="Connect your Stripe account to import payment data"
        logo="/integration-logos/stripe-logo.svg"
        isConnected={integrations.some(i => i.provider === 'stripe' && i.isConnected)}
      >
        <StripeConnect />
      </IntegrationCard>
      
      {/* Other integration cards will go here */}
    </div>
  );
} 