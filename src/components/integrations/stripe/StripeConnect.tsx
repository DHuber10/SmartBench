import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useIntegrations } from '@/hooks/use-integrations';

export function StripeConnect() {
  const [apiKey, setApiKey] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();
  const { integrations, connectIntegration, disconnectIntegration } = useIntegrations();
  
  // Find the Stripe integration status
  const stripeIntegration = integrations.find(i => i.provider === 'stripe');
  const isConnected = stripeIntegration?.isConnected || false;

  const handleConnect = async () => {
    if (!apiKey) {
      toast({
        title: 'API Key Required',
        description: 'Please enter your Stripe API key.',
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
      
      setApiKey('');
    } catch (error) {
      toast({
        title: 'Connection Failed',
        description: error instanceof Error ? error.message : 'Failed to connect to Stripe.',
        variant: 'destructive',
      });
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="space-y-4">
      {!isConnected ? (
        <>
          <p className="text-sm text-muted-foreground">
            Enter your Stripe API key to connect your account.
          </p>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="sk_test_..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleConnect} disabled={isConnecting}>
              {isConnecting ? 'Connecting...' : 'Connect'}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Your API key is stored securely and never shared.
          </p>
        </>
      ) : (
        <div className="space-y-2">
          <p className="text-sm text-green-600 font-medium">
            ✓ Connected to Stripe
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (stripeIntegration) {
                // Use the ID for disconnection
                disconnectIntegration(stripeIntegration.id);
              }
            }}
          >
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
} 