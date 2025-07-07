"use client";

import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setSelectedPricing,
  applyFilters,
} from "@/store/features/agent/agentSlice";

function PricingFilter() {
  const dispatch = useAppDispatch();
  const selectedPricing = useAppSelector(
    (state) => state.agent.selectedPricing
  );

  const handlePricingChange = (value: string) => {
    dispatch(setSelectedPricing(value));
    dispatch(applyFilters());
  };

  return (
    <Menubar className="bg-black text-white border-0">
      <MenubarMenu>
        <MenubarTrigger>Pricing</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup
            value={selectedPricing || ""}
            onValueChange={handlePricingChange}
          >
            <MenubarRadioItem value="Subscription">
              Subscription
            </MenubarRadioItem>
            <MenubarRadioItem value="Per-Use">Per-Use</MenubarRadioItem>
            <MenubarRadioItem value="Free Tier">Free Tier</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default PricingFilter;
