import { IntegrationService } from './integration-service';
import { SalesData } from '@/models/sales';
import { StripeCredentials } from '@/models/stripe';
import { api } from '@/lib/api';

export class StripeService extends IntegrationService {
  constructor() {
    super('stripe');
  }
  
  async testConnection(apiKey: string): Promise<boolean> {
    try {
      const response = await api.post('/integrations/stripe/test', { apiKey });
      return response.success;
    } catch (error) {
      console.error('Error testing Stripe connection:', error);
      return false;
    }
  }
  
  async connect(credentials: StripeCredentials): Promise<any> {
    return api.post('/integrations/stripe/connect', credentials);
  }
  
  async getCharges(startDate: Date, endDate: Date): Promise<any[]> {
    return api.get('/integrations/stripe/charges', {
      params: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      }
    });
  }
} 