"use client";

import React, { useState } from "react";
import {
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

function StatusFilter() {
  const [selected, setSelected] = useState("");

  return (
    <MenubarMenu>
      <MenubarTrigger>Status</MenubarTrigger>
      <MenubarContent>
        <MenubarRadioGroup value={selected} onValueChange={setSelected}>
          <MenubarRadioItem value="Archived">Archived</MenubarRadioItem>
          <MenubarRadioItem value="Beta">Beta</MenubarRadioItem>
          <MenubarRadioItem value="Active">Active</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  );
}

export default StatusFilter;
