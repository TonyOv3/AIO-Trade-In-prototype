import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  AlertTriangle,
  Users,
  BarChart3,
  Settings,
  Smartphone,
} from "lucide-react";

interface NavigationItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

function NavigationItem({
  href,
  icon,
  title,
  isActive = false,
}: NavigationItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

export default function Navigation() {
  // In a real app, you would determine the active route from the router
  const activeRoute = "/";

  return (
    <div className="space-y-1">
      <NavigationItem
        href="/"
        icon={<LayoutDashboard size={18} />}
        title="Dashboard"
        isActive={activeRoute === "/"}
      />
      <NavigationItem
        href="/risk-assessment"
        icon={<AlertTriangle size={18} />}
        title="Risk Assessment"
        isActive={activeRoute === "/risk-assessment"}
      />
      <NavigationItem
        href="/syndicate"
        icon={<Users size={18} />}
        title="Syndicate Hub"
        isActive={activeRoute === "/syndicate"}
      />
      <NavigationItem
        href="/market-analysis"
        icon={<BarChart3 size={18} />}
        title="Market Analysis"
        isActive={activeRoute === "/market-analysis"}
      />
      <NavigationItem
        href="/inventory"
        icon={<Smartphone size={18} />}
        title="Inventory"
        isActive={activeRoute === "/inventory"}
      />
      <NavigationItem
        href="/settings"
        icon={<Settings size={18} />}
        title="Settings"
        isActive={activeRoute === "/settings"}
      />
    </div>
  );
}
