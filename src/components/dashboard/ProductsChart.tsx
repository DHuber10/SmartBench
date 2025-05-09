
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis,
  YAxis, 
  CartesianGrid,
  Tooltip, 
  ResponsiveContainer, 
  TooltipProps,
  Cell
} from "recharts";

// Sample data
const productsData = [
  { name: "Cappuccino", sales: 2100 },
  { name: "Latte", sales: 1800 },
  { name: "Cold Brew", sales: 1600 },
  { name: "Espresso", sales: 1400 },
  { name: "Mocha", sales: 1200 },
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

export function ProductsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Top Products</CardTitle>
        <CardDescription>Top selling items by revenue</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={productsData}
              layout="vertical"
              margin={{
                top: 5,
                right: 10,
                left: 80,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={true} vertical={false} />
              <XAxis 
                type="number" 
                stroke="#6B7280" 
                fontSize={12}
                tickFormatter={(value) => `$${value}`}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                type="category"
                dataKey="name" 
                stroke="#6B7280" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
                {productsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? "#3B82F6" : "#93C5FD"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
