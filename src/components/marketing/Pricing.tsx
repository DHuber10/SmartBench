
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-smartbench-blue/10 px-3 py-1 text-sm text-smartbench-blue">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your business. All plans include core features.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 mt-12">
          <PricingCard
            title="Startup"
            price="$29"
            description="Perfect for new and growing small businesses"
            features={[
              "Connect 1 Square POS location",
              "Weekly email insights",
              "30-day sales analysis",
              "Top products report",
              "Basic anomaly detection",
              "Email support",
            ]}
            buttonText="Get Started"
            variant="outline"
          />
          <PricingCard
            title="Growth"
            price="$59"
            description="For established businesses ready to optimize"
            features={[
              "Connect up to 3 Square POS locations",
              "Weekly email insights",
              "90-day sales analysis",
              "Top products & categories",
              "Advanced anomaly detection",
              "Google Sheets integration",
              "Priority email support",
            ]}
            buttonText="Most Popular"
            variant="default"
            popular={true}
          />
          <PricingCard
            title="Enterprise"
            price="$99"
            description="For multi-location businesses"
            features={[
              "Connect unlimited Square POS locations",
              "Custom weekly insights",
              "12-month sales analysis & forecasting",
              "Custom reporting",
              "Advanced anomaly detection",
              "Google Sheets integration",
              "Dedicated account manager",
              "Phone & email support",
            ]}
            buttonText="Contact Sales"
            variant="outline"
          />
        </div>
        <div className="mt-8 flex justify-center">
          <p className="text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  variant: "default" | "outline";
  popular?: boolean;
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  variant,
  popular,
}: PricingCardProps) {
  return (
    <Card className={`relative flex flex-col border-border/40 ${popular ? "border-smartbench-blue shadow-lg shadow-smartbench-blue/10" : "shadow-sm"}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-smartbench-blue px-3 py-1 text-xs font-medium text-white">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-muted-foreground">/ month</span>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-smartbench-blue" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={variant} className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
