"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  setSelectedStatus,
  applyFilters,
} from "@/store/features/agent/agentSlice";

const allStatuses = ["Active", "Beta", "Archived"];

export default function StatusFilter() {
  const dispatch = useAppDispatch();
  const selectedStatuses = useAppSelector(
    (state) => state.agent.selectedStatus
  );

  const toggleStatus = (status: string) => {
    let updatedStatuses: string[];
    if (selectedStatuses.includes(status)) {
      updatedStatuses = selectedStatuses.filter((s) => s !== status);
    } else {
      updatedStatuses = [...selectedStatuses, status];
    }
    dispatch(setSelectedStatus(updatedStatuses));
    dispatch(applyFilters());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-accent-foreground border-0">
        <Button variant="outline">Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allStatuses.map((status) => (
          <DropdownMenuCheckboxItem
            key={status}
            checked={selectedStatuses.includes(status)}
            onCheckedChange={() => toggleStatus(status)}
          >
            {status}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
