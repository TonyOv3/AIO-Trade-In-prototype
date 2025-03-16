import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Package,
  Store,
  RefreshCw,
  ShieldAlert,
  ClipboardList,
  Users,
  Gavel,
  Smartphone,
} from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  count?: number;
  active?: boolean;
}

export default function NewNavigation() {
  // Get current pathname to determine active route
  const pathname = window.location.pathname;
  console.log("Current pathname:", pathname);

  const navigationItems: NavigationItem[] = [
    {
      name: "Dashboard",
      href: "/",
      icon: <LayoutDashboard className="h-5 w-5" />,
      active: pathname === "/" || pathname === "/dashboard",
    },
    {
      name: "AI Grading",
      href: "/ai-grading",
      icon: <Smartphone className="h-5 w-5" />,
      count: 0,
      active: pathname === "/ai-grading",
    },
    {
      name: "Market Analysis",
      href: "/market-analysis",
      icon: <BarChart3 className="h-5 w-5" />,
      count: 0,
      active: pathname === "/market-analysis",
    },
    {
      name: "Inventory",
      href: "/inventory",
      icon: <Package className="h-5 w-5" />,
      count: 162,
      active: pathname === "/inventory",
    },
    {
      name: "Marketplace",
      href: "/marketplace",
      icon: <Store className="h-5 w-5" />,
      count: 0,
      active: pathname === "/marketplace",
    },
    {
      name: "Trade-In",
      href: "/trade-in",
      icon: <RefreshCw className="h-5 w-5" />,
      count: 12,
      active: pathname === "/trade-in",
    },
    {
      name: "Risk Assessment",
      href: "/risk-assessment",
      icon: <ShieldAlert className="h-5 w-5" />,
      count: 0,
      active: pathname === "/risk-assessment",
    },
    {
      name: "Orders",
      href: "/orders",
      icon: <ClipboardList className="h-5 w-5" />,
      count: 0,
      active: pathname === "/orders",
    },
    {
      name: "CRM",
      href: "/crm",
      icon: <Users className="h-5 w-5" />,
      count: 0,
      active: pathname === "/crm",
    },
    {
      name: "Auctions",
      href: "/auctions",
      icon: <Gavel className="h-5 w-5" />,
      count: 0,
      active: pathname === "/auctions",
    },
  ];

  return (
    <div className="space-y-1">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          MAIN NAVIGATION
        </h2>
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex justify-between items-center rounded-md px-3 py-2 text-sm font-medium ${item.active ? "bg-blue-600 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              <div className="flex items-center">
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </div>
              {item.count !== undefined && item.count > 0 && (
                <span className="ml-auto inline-block rounded-full bg-gray-200 dark:bg-gray-700 px-2 py-0.5 text-xs font-medium">
                  {item.count}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
