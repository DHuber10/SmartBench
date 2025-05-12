import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle, CreditCard, ShoppingBag, Store, FileSpreadsheet, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type IntegrationOption = "stripe" | "square" | "etsy" | "sheets" | "other" | null;

export function OnboardingModal({ open, onOpenChange }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [selectedIntegration, setSelectedIntegration] = useState<IntegrationOption>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && selectedIntegration === "stripe") {
      // If Stripe is selected, close the modal and navigate to integrations page
      onOpenChange(false);
      navigate("/integrations");
      toast.success("Redirecting to Stripe integration...");
      return;
    }
    
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleComplete = () => {
    onOpenChange(false);
    toast.success("Onboarding completed! Generating your first insights...");
  };

  const handleSelectIntegration = (integration: IntegrationOption) => {
    setSelectedIntegration(integration);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Welcome to SmartBench</DialogTitle>
          <DialogDescription>
            Let's get your account set up. This will take less than 5 minutes.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center space-x-2 mb-6">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i + 1 === step
                  ? "bg-smartbench-blue"
                  : i + 1 < step
                  ? "bg-smartbench-blue/50"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-medium text-center mb-4">Connect your sales platform</h3>
            
            {/* Stripe Option */}
            <div 
              className={`rounded-xl border p-4 flex items-center space-x-4 cursor-pointer ${
                selectedIntegration === "stripe" ? "border-smartbench-blue bg-smartbench-blue/5" : ""
              }`}
              onClick={() => handleSelectIntegration("stripe")}
            >
              <div className="h-12 w-12 rounded-full bg-[#635BFF] flex items-center justify-center text-white">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="font-medium">Connect Stripe</h3>
                <p className="text-sm text-gray-500">Link your Stripe account to import payment data</p>
              </div>
            </div>
            
            {/* Square Option */}
            <div 
              className={`rounded-xl border p-4 flex items-center space-x-4 cursor-pointer ${
                selectedIntegration === "square" ? "border-smartbench-blue bg-smartbench-blue/5" : ""
              }`}
              onClick={() => handleSelectIntegration("square")}
            >
              <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h3 className="font-medium">Connect Square POS</h3>
                <p className="text-sm text-gray-500">Link your Square account to import sales data</p>
              </div>
            </div>
            
            {/* Etsy Option */}
            <div 
              className={`rounded-xl border p-4 flex items-center space-x-4 cursor-pointer ${
                selectedIntegration === "etsy" ? "border-smartbench-blue bg-smartbench-blue/5" : ""
              }`}
              onClick={() => handleSelectIntegration("etsy")}
            >
              <div className="h-12 w-12 rounded-full bg-[#F56400] flex items-center justify-center text-white">
                <Store size={24} />
              </div>
              <div>
                <h3 className="font-medium">Connect Etsy</h3>
                <p className="text-sm text-gray-500">Link your Etsy shop to import sales data</p>
              </div>
            </div>
            
            {/* Google Sheets Option */}
            <div 
              className={`rounded-xl border p-4 flex items-center space-x-4 cursor-pointer ${
                selectedIntegration === "sheets" ? "border-smartbench-blue bg-smartbench-blue/5" : ""
              }`}
              onClick={() => handleSelectIntegration("sheets")}
            >
              <div className="h-12 w-12 rounded-full bg-[#0F9D58] flex items-center justify-center text-white">
                <FileSpreadsheet size={24} />
              </div>
              <div>
                <h3 className="font-medium">Connect Google Sheets</h3>
                <p className="text-sm text-gray-500">Import data from your Google Sheets</p>
              </div>
            </div>
            
            {/* Other Option */}
            <div 
              className={`rounded-xl border p-4 flex items-center space-x-4 cursor-pointer ${
                selectedIntegration === "other" ? "border-smartbench-blue bg-smartbench-blue/5" : ""
              }`}
              onClick={() => handleSelectIntegration("other")}
            >
              <div className="h-12 w-12 rounded-full bg-gray-500 flex items-center justify-center text-white">
                <MoreHorizontal size={24} />
              </div>
              <div>
                <h3 className="font-medium">Other Platform</h3>
                <p className="text-sm text-gray-500">Connect a different sales platform</p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 w-full mt-4">
              <Button 
                className="w-full" 
                onClick={handleNext}
                disabled={!selectedIntegration}
              >
                {selectedIntegration ? `Connect ${selectedIntegration === "sheets" ? "Google Sheets" : selectedIntegration.charAt(0).toUpperCase() + selectedIntegration.slice(1)}` : "Select a platform"}
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-gray-500 hover:text-gray-700" 
                onClick={() => {
                  setSelectedIntegration(null);
                  handleNext();
                }}
              >
                I'll do this later
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="rounded-xl border p-4 flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-smartbench-blue/10 flex items-center justify-center text-smartbench-blue">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div>
                <h3 className="font-medium">Link Google Sheets (Optional)</h3>
                <p className="text-sm text-gray-500">Connect your Google Sheets for additional data</p>
              </div>
            </div>
            <div className="flex space-x-2 w-full">
              <Button variant="outline" className="flex-1" onClick={handleNext}>
                Skip for now
              </Button>
              <Button className="flex-1" onClick={handleNext}>
                Connect Google Sheets
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle size={40} />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-xl">Ready to generate insights!</h3>
              <p className="text-sm text-gray-500 mt-2">
                We have everything we need to start analyzing your data and provide actionable insights.
              </p>
            </div>
            <Button className="w-full" onClick={handleComplete}>
              Generate First Insights
            </Button>
          </div>
        )}

        <DialogFooter className="flex items-center justify-between">
          {step > 1 && step < totalSteps && (
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
          )}
          <div className="text-sm text-gray-500">
            Step {step} of {totalSteps}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
