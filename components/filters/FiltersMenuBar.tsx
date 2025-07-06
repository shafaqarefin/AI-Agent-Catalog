import React from "react";
import { Menubar } from "@/components/ui/menubar";
import PricingFilter from "./Pricing";
import StatusFilter from "./Status";
import CategoryFilter from "./Category";
function FiltersBar() {
  return (
    <Menubar className="bg-stone-800 text-white font-mono font-bold	w-fit	">
      <PricingFilter />
      <StatusFilter />
      <CategoryFilter />
    </Menubar>
  );
}

export default FiltersBar;
