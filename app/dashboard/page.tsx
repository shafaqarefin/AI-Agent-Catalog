import CatalogHeader from "@/components/agent/Header";
import HydrationAgent from "@/components/agent/HydrationAgent"; // new
import AgentGrid from "@/components/agent/AgentsGrid";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
export const metadata = {
  title: "AI Agent Dashboard",
  description:
    "Discover and manage AI agents filtered by category, pricing, and status.",
  keywords: ["AI Agents", "Dashboard", "Filters", "AI Catalog"],
  openGraph: {
    title: "AI Agent Dashboard",
    description: "Explore AI agents with advanced filters and search.",
    url: `https://${process.env.NEXT_PUBLIC_BASE_URL}.com/dashboard`,
    siteName: "AI Agent Catalog",
    type: "website",
  },
  robots: "index, follow",
};

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/agents`, {
    cache: "no-store",
  });
  const agents = await res.json();

  return (
    <>
      <CatalogHeader />
      <HydrationAgent agents={agents} />
      <AgentGrid />
    </>
  );
}
