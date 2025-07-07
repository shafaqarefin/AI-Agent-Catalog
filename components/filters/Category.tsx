// CategoryFilter.tsx
"use client";

import {
  setSelectedCategories,
  applyFilters,
} from "@/store/features/agent/agentSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const allCategories = [
  "Customer Service",
  "Operations",
  "Data Analysis",
  "Development",
  "Human Resources",
  "Marketing",
  "Finance",
  "Legal",
];

export default function CategoryFilter() {
  const dispatch = useAppDispatch();
  const selectedCategories = useAppSelector(
    (state) => state.agent.selectedCategories
  );

  const toggleCategory = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    dispatch(setSelectedCategories(updated));
    dispatch(applyFilters());
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="bg-accent-foreground border-0">
          <Button variant="outline">Categories</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {allCategories.map((category) => (
            <DropdownMenuCheckboxItem
              key={category}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => toggleCategory(category)}
            >
              {category}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
