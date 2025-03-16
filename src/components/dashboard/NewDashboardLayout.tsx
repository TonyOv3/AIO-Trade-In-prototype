import React from "react";
import NewNavigation from "./NewNavigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Star } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function NewDashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-white flex flex-col">
        <div className="p-4 h-16 border-b border-border flex items-center">
          <h1 className="text-xl font-bold">PhoneAI Market</h1>
        </div>

        {/* Pinned Pages */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-gray-500">
            PINNED PAGES
          </h2>
          <div className="space-y-1">
            <a
              href="#"
              className="flex justify-between items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
            >
              <div className="flex items-center">
                <BarChart3Icon className="mr-3 h-5 w-5" />
                <span>Market Analysis</span>
              </div>
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            </a>
            <a
              href="#"
              className="flex justify-between items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
            >
              <div className="flex items-center">
                <PackageIcon className="mr-3 h-5 w-5" />
                <span>Inventory</span>
              </div>
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <NewNavigation />

        {/* User Profile */}
        <div className="mt-auto p-4 border-t border-border">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                alt="Alex Johnson"
              />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium">Alex Johnson</p>
              <p className="text-xs text-muted-foreground">Senior Trader</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-white flex items-center justify-between px-6">
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 w-full rounded-md border border-input bg-background text-sm ring-offset-background"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                1
              </span>
            </button>
            <div className="text-xs text-muted-foreground">v1.2.4</div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  );
}

function BarChart3Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
