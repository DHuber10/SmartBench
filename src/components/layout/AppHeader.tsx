import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Settings, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppHeader() {
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  // Format user display name
  const displayName = user?.user_metadata?.full_name || user?.email || "User";
  
  // Get user initials for the avatar
  const getInitials = () => {
    // If we have a full name, use first name and last initial
    if (user?.user_metadata?.full_name) {
      const nameParts = user.user_metadata.full_name.split(' ');
      if (nameParts.length > 1) {
        // First name + last initial (e.g., "John D")
        return `${nameParts[0]} ${nameParts[nameParts.length - 1].charAt(0)}`;
      }
      return nameParts[0];
    }
    
    // Fallback to email initials
    if (user?.email) {
      const emailParts = user.email.split('@');
      return emailParts[0].substring(0, 2).toUpperCase();
    }
    
    // Default
    return "DH";
  };
  
  // Get avatar initials (just first letter of first and last name)
  const avatarInitials = () => {
    if (user?.user_metadata?.full_name) {
      const nameParts = user.user_metadata.full_name.split(' ');
      if (nameParts.length > 1) {
        return `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(0)}`;
      }
      return nameParts[0].charAt(0);
    }
    
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    
    return "DH";
  };

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1 rounded">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13.2L8.45 9.6L12.6 12.6L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 6V18H3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-semibold">SmartBench</span>
          </Link>
        </div>
        
        <nav className="flex space-x-4">
          <Link
            to="/dashboard"
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-colors",
              location.pathname === "/dashboard"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
          >
            Dashboard
          </Link>
          <Link
            to="/reports"
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-colors",
              location.pathname === "/reports"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
          >
            Reports
          </Link>
          <Link
            to="/integrations"
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-colors",
              location.pathname === "/integrations"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
          >
            <div className="flex items-center">
              <Settings className="w-4 h-4 mr-1" />
              Integrations
            </div>
          </Link>
        </nav>
        
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium cursor-pointer">
                  {avatarInitials()}
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{displayName}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
} 