
import { CheckCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-smartbench-blue/10 px-3 py-1 text-sm text-smartbench-blue">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Three simple steps to data-driven insights
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting started with SmartBench takes less than 5 minutes. No technical expertise required.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-smartbench-blue text-white mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Connect Square POS</h3>
            <p className="text-gray-500">
              Securely link your Square account with just a few clicks. All your sales data will sync automatically.
            </p>
            <div className="mt-4 bg-smartbench-gray-light rounded-lg p-4 w-full">
              <div className="flex items-center text-left space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Secure OAuth connection</span>
              </div>
              <div className="flex items-center text-left space-x-2 mt-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">No manual data entry</span>
              </div>
              <div className="flex items-center text-left space-x-2 mt-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Automatic daily sync</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-smartbench-blue text-white mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Link Google Sheets (Optional)</h3>
            <p className="text-gray-500">
              Connect your Google Sheets for additional data sources or custom reporting options.
            </p>
            <div className="mt-4 bg-smartbench-gray-light rounded-lg p-4 w-full">
              <div className="flex items-center text-left space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Optional integration</span>
              </div>
              <div className="flex items-center text-left space-x-2 mt-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Import additional data</span>
              </div>
              <div className="flex items-center text-left space-x-2 mt-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Custom reporting</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-smartbench-blue text-white mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Get Your First Insights</h3>
            <p className="text-gray-500">
              SmartBench immediately analyzes your data and generates your first insights within minutes.
            </p>
            <div className="mt-4 bg-smartbench-gray-light rounded-lg p-4 w-full">
              <div className="flex items-center text-left space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Immediate data analysis</span>
              </div>
              <div className="flex items-center text-left space-x-2 mt-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Interactive dashboard</span>
              </div>
              <div className="flex items-center text-left space-x-2 mt-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Weekly email reports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
