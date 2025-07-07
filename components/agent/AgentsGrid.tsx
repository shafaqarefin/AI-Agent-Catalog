// components/agent/AgentsGrid.tsx
"use client";

import AgentCard from "./AgentCard";
import { useAppSelector } from "@/store/hooks";
import { AnimatePresence } from "framer-motion";

export default function AgentGrid() {
  const agents = useAppSelector((state) => state.agent.filteredAgents);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-3">
      <AnimatePresence mode="popLayout">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </AnimatePresence>
    </div>
  );
}
