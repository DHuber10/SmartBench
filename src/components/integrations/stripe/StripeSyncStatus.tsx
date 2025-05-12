import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useIntegrations } from '@/hooks/use-integrations';
import { formatDistanceToNow } from 'date-fns';

export function StripeSyncStatus() {
  const [isSyncing, setIsSyncing] = useState(false);
  const { toast } = useToast();
  const { syncIntegration, disconnectIntegration, getIntegrationStatus } = useIntegrations();
  const stripeStatus = getIntegrationStatus('stripe');
  
  const handleSync = async () => {
    setIsSyncing(true);
    
    try {
      await syncIntegration('stripe');
      
      toast({
        title: 'Sync Successful',
        description: 'Your Stripe data has been synced successfully.',
      });
    } catch (error) {
      toast({
        title: 'Sync Failed',
        description: error.message || 'Unable to sync Stripe data',
        variant: 'destructive',
      });
    } finally {
      setIsSyncing(false);
    }
  };
  
  const handleDisconnect = async () => {
    try {
      await disconnectIntegration('stripe');
      
      toast({
        title: 'Disconnected',
        description: 'Your Stripe account has been disconnected.',
      });
    } catch (error) {
      toast({
        title: 'Disconnect Failed',
        description: error.message || 'Unable to disconnect Stripe account',
        variant: 'destructive',
      });
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">Account Connected</h4>
          <p className="text-sm text-muted-foreground">
            {stripeStatus?.metadata?.businessName || 'Stripe Account'}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={handleDisconnect}>
          Disconnect
        </Button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm">
            Last synced: {stripeStatus?.lastSyncDate 
              ? formatDistanceToNow(new Date(stripeStatus.lastSyncDate), { addSuffix: true }) 
              : 'Never'}
          </p>
          <Button onClick={handleSync} disabled={isSyncing}>
            {isSyncing ? 'Syncing...' : 'Sync Now'}
          </Button>
        </div>
      </div>
    </div>
  );
} 