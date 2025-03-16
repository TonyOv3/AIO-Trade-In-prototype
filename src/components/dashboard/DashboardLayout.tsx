import React from "react";
import Navigation from "./Navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* Fixed-width navigation (16rem) */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="p-4 h-16 border-b border-border flex items-center">
          <h1 className="text-xl font-bold">Phone Buyback</h1>
        </div>
        <nav className="p-4">
          <Navigation />
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
