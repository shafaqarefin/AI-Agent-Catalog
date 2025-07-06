// store/features/agent/agentSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Agent = {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Beta" | "Archived";
  category:
    | "Customer Service"
    | "Marketing"
    | "Development"
    | "Data Analysis"
    | "Operations"
    | "Finance"
    | "Legal"
    | "Human Resources";
  pricingModel: "Free Tier" | "Subscription" | "Per-Use";
};

type AgentState = {
  agents: Agent[];
  filteredAgents: Agent[];
  searchQuery: string;
  selectedStatus: string[];
  selectedCategories: string[];
  selectedPricing: string | null;
};

const initialState: AgentState = {
  agents: [],
  filteredAgents: [],
  searchQuery: "",
  selectedStatus: [],
  selectedCategories: [],
  selectedPricing: null,
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload;
      state.filteredAgents = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedStatus: (state, action: PayloadAction<string[]>) => {
      state.selectedStatus = action.payload;
    },
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
    },
    setSelectedPricing: (state, action: PayloadAction<string | null>) => {
      state.selectedPricing = action.payload;
    },
    clearFilters: (state) => {
      state.searchQuery = "";
      state.selectedStatus = [];
      state.selectedCategories = [];
      state.selectedPricing = null;
      state.filteredAgents = state.agents;
    },
    applyFilters: (state) => {
      let filtered = state.agents;

      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (agent) =>
            agent.name.toLowerCase().includes(query) ||
            agent.description.toLowerCase().includes(query)
        );
      }

      if (state.selectedStatus.length > 0) {
        filtered = filtered.filter((agent) =>
          state.selectedStatus.includes(agent.status)
        );
      }

      if (state.selectedCategories.length > 0) {
        filtered = filtered.filter((agent) =>
          state.selectedCategories.includes(agent.category)
        );
      }

      if (state.selectedPricing) {
        filtered = filtered.filter(
          (agent) => agent.pricingModel === state.selectedPricing
        );
      }

      state.filteredAgents = filtered;
    },
  },
});

export const {
  setAgents,
  setSearchQuery,
  setSelectedStatus,
  setSelectedCategories,
  setSelectedPricing,
  clearFilters,
  applyFilters,
} = agentSlice.actions;

export default agentSlice.reducer;
