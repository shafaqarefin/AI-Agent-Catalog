"use client";

import React from "react";
import { Input } from "../ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setSearchQuery,
  applyFilters,
} from "@/store/features/agent/agentSlice";

function Search() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.agent.searchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(applyFilters());
  };

  return (
    <Input
      value={searchQuery}
      onChange={handleChange}
      className="bg-white w-2xs text-stone-900"
      placeholder="Search for AI Agent here"
    />
  );
}

export default Search;
