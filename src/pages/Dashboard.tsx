
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { ProductsChart } from "@/components/dashboard/ProductsChart";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { OnboardingModal } from "@/components/dashboard/OnboardingModal";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // In a real app, this would check if the user is new
    const isNewUser = true;
    if (isNewUser) {
      setShowOnboarding(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-smartbench-gray-light">
      <DashboardHeader />
      
      <main className="container py-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-1/2">
            <SalesChart />
          </div>
          <div className="w-full md:w-1/2">
            <ProductsChart />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mt-6">
          <InsightCard 
            title="Weekly Smart Report" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="lucide lucide-lightbulb">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            }
            variant="highlight"
            actionLabel="View Full Report"
            onAction={() => console.log("View full report")}
          >
            <p className="text-lg">
              Your average daily sales increased by 18% compared to last week. This growth is mainly driven by your "Cold Brew" which saw a 32% increase in sales.
            </p>
          </InsightCard>
          
          <InsightCard 
            title="Notable Anomalies" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            }
            variant="warning"
          >
            <ul className="space-y-2 list-disc pl-4">
              <li>Friday sales were 47% lower than your weekly average.</li>
              <li>"Espresso" sales dropped by 28% this week compared to your monthly average.</li>
            </ul>
          </InsightCard>
          
          <InsightCard 
            title="Actionable Suggestions" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v4" />
                <path d="M13 21h-8a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h4" />
                <path d="M9 18l3 -3l-3 -3" />
                <path d="M17 14h-7" />
              </svg>
            }
            variant="success"
            actionLabel="Implement Suggestion"
            onAction={() => console.log("Implement suggestion")}
          >
            <ul className="space-y-2 list-disc pl-4">
              <li>Consider running a Friday promotion to boost your historically slowest day.</li>
              <li>Bundle "Espresso" with your popular "Cold Brew" to increase sales of both products.</li>
              <li>Your morning rush is strongest between 7:30-8:30 AM. Consider adding an additional staff member during this hour.</li>
            </ul>
          </InsightCard>
        </div>
      </main>

      <OnboardingModal open={showOnboarding} onOpenChange={setShowOnboarding} />
    </div>
  );
}
