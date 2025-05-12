import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useIntegrations } from '@/hooks/use-integrations';
import { StripeSyncStatus } from './StripeSyncStatus';

export function StripeConnect() {
  const [apiKey, setApiKey] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();
  const { connectIntegration, getIntegrationStatus } = useIntegrations();
  const stripeStatus = getIntegrationStatus('stripe');
  
  const handleConnect = async () => {
    if (!apiKey) {
      toast({
        title: 'API Key Required',
        description: 'Please enter your Stripe API key',
        variant: 'destructive',
      });
      return;
    }
    
    setIsConnecting(true);
    
    try {
      await connectIntegration('stripe', { apiKey });
      
      toast({
        title: 'Connection Successful',
        description: 'Your Stripe account has been connected successfully.',
      });
    } catch (error) {
      toast({
        title: 'Connection Failed',
        description: error.message || 'Unable to connect to Stripe',
        variant: 'destructive',
      });
    } finally {
      setIsConnecting(false);
    }
  };
  
  if (stripeStatus?.isConnected) {
    return <StripeSyncStatus />;
  }
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="api-key" className="text-sm font-medium">
          Stripe API Key
        </label>
        <Input
          id="api-key"
          type="password"
          placeholder="sk_test_..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          You can find your API keys in the Stripe Dashboard under Developers &gt; API keys.
        </p>
      </div>
      
      <Button onClick={handleConnect} disabled={isConnecting}>
        {isConnecting ? 'Connecting...' : 'Connect Stripe'}
      </Button>
    </div>
  );
} 