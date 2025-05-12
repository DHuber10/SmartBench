import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Business Intelligence for Small Business Owners
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                SmartBench turns your sales data into actionable insights. Connect your Square POS and get weekly reports with data-driven recommendations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex -space-x-2">
                <img
                  alt="User"
                  className="rounded-full border-2 border-background h-8 w-8 object-cover"
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80"
                />
                <img
                  alt="User"
                  className="rounded-full border-2 border-background h-8 w-8 object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80"
                />
                <img
                  alt="User"
                  className="rounded-full border-2 border-background h-8 w-8 object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80"
                />
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">450+ businesses</span> using SmartBench
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
