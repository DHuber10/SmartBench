
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis,
  YAxis, 
  CartesianGrid,
  Tooltip, 
  ResponsiveContainer, 
  TooltipProps
} from "recharts";

// Sample data
const salesData = [
  { date: "May 1", sales: 1200 },
  { date: "May 2", sales: 1800 },
  { date: "May 3", sales: 1400 },
  { date: "May 4", sales: 1300 },
  { date: "May 5", sales: 1900 },
  { date: "May 6", sales: 2000 },
  { date: "May 7", sales: 2200 },
  { date: "May 8", sales: 1800 },
  { date: "May 9", sales: 1900 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow-sm">
        <p className="text-sm font-medium">{`${label}`}</p>
        <p className="text-sm text-gray-600">{`Sales: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Sales Over Time</CardTitle>
        <CardDescription>Daily revenue for the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="date" 
                stroke="#6B7280" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6B7280" 
                fontSize={12}
                tickFormatter={(value) => `$${value}`}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 4, fill: '#3B82F6' }}
                activeDot={{ r: 6, fill: '#1E40AF' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
