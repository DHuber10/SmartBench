export interface StripeCredentials {
  apiKey: string;
  webhookSecret?: string;
}

export interface StripeAccount {
  id: string;
  businessName?: string;
  email?: string;
}

export interface StripeIntegrationStatus {
  isConnected: boolean;
  lastSyncDate?: Date;
  error?: string;
  account?: StripeAccount;
} 