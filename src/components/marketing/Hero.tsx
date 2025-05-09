
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Turn Your Sales Data Into 
                <span className="text-smartbench-blue"> Actionable Insights</span>
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-[700px]">
                SmartBench connects to your Square POS, analyzes your sales data, and sends you weekly action tips to grow your business. No data science degree required.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" onClick={() => window.location.href = '/signup'}>
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '#how-it-works'}>
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
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/placeholder.svg"
                alt="SmartBench Dashboard Preview"
                className="aspect-[16/9] object-cover w-full h-auto"
                width={800}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
