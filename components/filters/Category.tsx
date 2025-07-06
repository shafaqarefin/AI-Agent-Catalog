"use client";

import React, { useState } from "react";
import {
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

function CategoryFilter() {
  const [selected, setSelected] = useState("");

  return (
    <MenubarMenu>
      <MenubarTrigger>Categories</MenubarTrigger>
      <MenubarContent>
        <MenubarRadioGroup value={selected} onValueChange={setSelected}>
          <MenubarRadioItem value="Customer Service">
            Customer Service
          </MenubarRadioItem>
          <MenubarRadioItem value="Operations">Operations</MenubarRadioItem>
          <MenubarRadioItem value="Data Analysis">
            Data Analysis
          </MenubarRadioItem>
          <MenubarRadioItem value="Development">Development</MenubarRadioItem>
          <MenubarRadioItem value="Human Resources">
            Human Resources
          </MenubarRadioItem>
          <MenubarRadioItem value="Marketing">Marketing</MenubarRadioItem>
          <MenubarRadioItem value="Finance">Finance</MenubarRadioItem>
          <MenubarRadioItem value="Legal">Legal</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  );
}

export default CategoryFilter;
