import { Integration, IntegrationProvider } from '@/models/integration';
import { SalesData } from '@/models/sales';
import { api } from '@/lib/api';

export class IntegrationService {
  constructor(protected provider: IntegrationProvider) {}
  
  async getStatus(): Promise<Integration> {
    return api.get(`/integrations/${this.provider}`);
  }
  
  async connect(credentials: any): Promise<Integration> {
    return api.post(`/integrations/${this.provider}/connect`, credentials);
  }
  
  async disconnect(): Promise<void> {
    return api.post(`/integrations/${this.provider}/disconnect`);
  }
  
  async sync(): Promise<{ success: boolean; message?: string }> {
    return api.post(`/integrations/${this.provider}/sync`);
  }
  
  async getSalesData(startDate: Date, endDate: Date): Promise<SalesData[]> {
    return api.get(`/sales/${this.provider}`, {
      params: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      }
    });
  }
} 