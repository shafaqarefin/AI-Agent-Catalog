import AgentCard from "./AgentCard";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
};

export default function AgentGrid({ agents }: { agents: Agent[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-3">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
