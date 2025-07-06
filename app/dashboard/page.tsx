import AgentGrid from "@/components/agent/AgentsGrid";
import CatalogHeader from "@/components/agent/Header";

export default async function Dashboard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/agents`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch agents");
  }
  const agents = await res.json();

  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <CatalogHeader />
      <AgentGrid agents={agents} />
    </>
  );
}
