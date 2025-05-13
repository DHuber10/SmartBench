import React from 'react';
import { AppHeader } from '@/components/layout/AppHeader';

export default function Reports() {
  return (
    <div className="min-h-screen bg-smartbench-gray-light">
      <AppHeader />
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-6">Reports</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg mb-4">Select a report type to generate:</p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
              <h3 className="font-medium mb-2">Sales Report</h3>
              <p className="text-sm text-gray-600">View your sales data over time</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
              <h3 className="font-medium mb-2">Product Performance</h3>
              <p className="text-sm text-gray-600">Analyze your best and worst performing products</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
              <h3 className="font-medium mb-2">Customer Insights</h3>
              <p className="text-sm text-gray-600">Understand your customer behavior</p>
            </div>
          </div>
          
          <div className="mt-8 p-8 border border-dashed rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Select a report type to view details</p>
          </div>
        </div>
      </main>
    </div>
  );
} 