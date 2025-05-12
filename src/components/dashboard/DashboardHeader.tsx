import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // Get user initials from first and last name
  const getUserInitials = () => {
    if (!user) return "U";
    
    // Try to get initials from user metadata
    const firstName = user.user_metadata?.first_name;
    const lastName = user.user_metadata?.last_name;
    
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    } else if (firstName) {
      return firstName.charAt(0).toUpperCase();
    } else if (user.email) {
      // Fallback to email initial if no name is available
      return user.email.charAt(0).toUpperCase();
    }
    
    return "U";
  };

  // Get user's full name or email
  const getUserDisplayName = () => {
    if (!user) return "";
    
    const firstName = user.user_metadata?.first_name;
    const lastName = user.user_metadata?.last_name;
    
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    } else if (firstName) {
      return firstName;
    }
    
    return user.email;
  };

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
          <Link
            to="/integrations"
            className={cn(
              "text-gray-600 hover:text-smartbench-blue transition-colors",
              pathname === "/integrations" ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Settings className="mr-2 h-4 w-4" />
            Integrations
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-10 w-10 rounded-full">
                <div className="h-8 w-8 rounded-full bg-smartbench-gray-light flex items-center justify-center">
                  <span className="text-sm font-medium">{getUserInitials()}</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-smartbench-gray-light">
                  <span className="text-sm font-medium">{getUserInitials()}</span>
                </div>
                <div className="flex flex-col space-y-0.5">
                  <p className="text-sm font-medium">{getUserDisplayName()}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={() => console.log("Profile clicked")}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            <div className="px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-smartbench-gray-light flex items-center justify-center">
                  <span className="text-sm font-medium">{getUserInitials()}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">{getUserDisplayName()}</span>
                  <span className="text-xs text-gray-500">{user?.email}</span>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4 mr-1" />
                Log out
              </Button>
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
