export interface Customer {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  sku?: string;
  category?: string;
}

export interface SalesData {
  id: string;
  date: Date;
  amount: number;
  currency: string;
  status: string;
  customer?: Customer;
  items: OrderItem[];
  source: string; // 'stripe', 'square', etc.
  metadata?: Record<string, any>;
} 