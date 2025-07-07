"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setAgents, applyFilters } from "@/store/features/agent/agentSlice";
import { Agent } from "@/store/features/agent/agentSlice";

export default function HydrationAgent({ agents }: { agents: Agent[] }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAgents(agents));
    dispatch(applyFilters());
  }, [agents, dispatch]);

  return null;
}
