import React from "react";
import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";
import { getIndustryInsight } from "@/actions/dashboard";
import DashboardView from "./_components/dashboardview";

const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  const insights=await getIndustryInsight();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  return <div className="container mx-auto">
    <DashboardView insights={insights}/>
  </div>;
};

export default IndustryInsightsPage;


