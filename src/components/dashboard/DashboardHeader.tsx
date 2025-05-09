
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-semibold text-gray-900">SmartBench</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-smartbench-blue border-b-2 border-smartbench-blue pb-1 transition-colors">
            Dashboard
          </a>
          <a href="#" className="text-gray-600 hover:text-smartbench-blue transition-colors">
            Reports
          </a>
          <a href="#" className="text-gray-600 hover:text-smartbench-blue transition-colors">
            Settings
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" onClick={() => console.log("User profile clicked")}>
            <div className="h-8 w-8 rounded-full bg-smartbench-gray-light flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </Button>
        </div>
        
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#" className="px-4 py-2 text-smartbench-blue font-medium" onClick={() => setMobileMenuOpen(false)}>
              Dashboard
            </a>
            <a href="#" className="px-4 py-2 text-gray-600 hover:text-smartbench-blue" onClick={() => setMobileMenuOpen(false)}>
              Reports
            </a>
            <a href="#" className="px-4 py-2 text-gray-600 hover:text-smartbench-blue" onClick={() => setMobileMenuOpen(false)}>
              Settings
            </a>
            <hr className="my-2" />
            <div className="px-4 py-2 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-smartbench-gray-light flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
              <span className="text-gray-600">John Doe</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-smartbench-blue text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 3v18h18" />
        <path d="m7 17 4-4 4 4 6-6" />
      </svg>
    </div>
  );
}
