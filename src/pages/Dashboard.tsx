import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import NewDashboardHome from "@/components/dashboard/NewDashboardHome";

export default function Dashboard() {
  return (
    <NewDashboardLayout>
      <NewDashboardHome />
    </NewDashboardLayout>
  );
}
