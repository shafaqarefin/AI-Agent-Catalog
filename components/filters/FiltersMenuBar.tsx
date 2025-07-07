"use client";

import React from "react";
import CategoryFilter from "./Category";
import StatusFilter from "./Status";
import PricingFilter from "./Pricing";

function FiltersBar() {
  return (
    <div className="flex gap-4">
      <CategoryFilter />
      <StatusFilter />
      <PricingFilter />
    </div>
  );
}

export default FiltersBar;
