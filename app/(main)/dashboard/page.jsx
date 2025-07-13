import React from "react";
import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";
import { getIndustryInsight } from "@/actions/dashboard";
import DashboardView from "./_components/dashboardview";

const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  // ⛔ Check this BEFORE calling getIndustryInsight
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsight();

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
};

export default IndustryInsightsPage;
