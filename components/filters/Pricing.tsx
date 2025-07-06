"use client";

import React, { useState } from "react";
import {
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

function PricingFilter() {
  const [selected, setSelected] = useState("");

  return (
    <MenubarMenu>
      <MenubarTrigger>Pricing</MenubarTrigger>
      <MenubarContent>
        <MenubarRadioGroup value={selected} onValueChange={setSelected}>
          <MenubarRadioItem value="Subscription">Subscription</MenubarRadioItem>
          <MenubarRadioItem value="Per-Use">Per-Use</MenubarRadioItem>
          <MenubarRadioItem value="Free Tier">Free Tier</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  );
}

export default PricingFilter;
