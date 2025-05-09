
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  return (
    <section id="features" className="py-16 bg-smartbench-gray-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-smartbench-blue/10 px-3 py-1 text-sm text-smartbench-blue">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything you need to make data-driven decisions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SmartBench helps small business owners understand their data without the complexity of spreadsheets or costly consultants.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <FeatureCard
            title="Sales Analysis"
            description="Visualize your daily, weekly, and monthly sales trends with easy-to-read charts and comparisons."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10"
              >
                <path d="M3 3v18h18" />
                <path d="m7 17 4-4 4 4 6-6" />
              </svg>
            }
          />
          <FeatureCard
            title="Product Insights"
            description="Identify your top-performing products and understand which items drive the most revenue for your business."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <circle cx="16" cy="14" r="4" />
                <path d="M8 14h2" />
                <path d="M8 10h2" />
                <path d="M12 10h4" />
              </svg>
            }
          />
          <FeatureCard
            title="Weekly Smart Reports"
            description="Receive concise, actionable insights every Monday morning with specific recommendations for your business."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v4" />
                <path d="M13 21h-8a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h4" />
                <path d="M9 18l3 -3l-3 -3" />
                <path d="M17 14h-7" />
              </svg>
            }
          />
          <FeatureCard
            title="Anomaly Detection"
            description="Get alerts about unusual sales patterns or opportunities that might otherwise go unnoticed."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10"
              >
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            }
          />
          <FeatureCard
            title="Square Integration"
            description="Seamless connection with your Square POS system for automatic data import and analysis."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="m6 12 4 2 8 -5" />
              </svg>
            }
          />
          <FeatureCard
            title="Google Sheets Integration"
            description="Optional connection to your Google Sheets for custom reporting and additional data sources."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 17h6" />
                <path d="M9 13h6" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-smartbench-blue/10 text-smartbench-blue">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
