export type IntegrationProvider = 'stripe' | 'square' | 'etsy' | 'google_sheets';

export interface Integration {
  id: string;
  provider: IntegrationProvider;
  userId: string;
  isConnected: boolean;
  lastSyncDate?: Date;
  error?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface IntegrationCredentials {
  stripe: {
    apiKey: string;
    webhookSecret?: string;
  };
  // Add other providers as needed
} 