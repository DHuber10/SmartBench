import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface IntegrationCardProps {
  name: string;
  description: string;
  logo: string;
  isConnected: boolean;
  children: ReactNode;
}

export function IntegrationCard({
  name,
  description,
  logo,
  isConnected,
  children
}: IntegrationCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt={`${name} logo`} className="h-8 w-8" />
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
        {isConnected && (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Connected
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
} 