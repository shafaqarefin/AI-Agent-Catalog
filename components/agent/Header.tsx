import React from "react";
import FiltersBar from "../filters/FiltersMenuBar";
import Search from "../search/Search";
import { Button } from "../ui/button";
import { ClearFiltersIcon } from "../filters/ClearFilterIcon";

function CatalogHeader() {
  return (
    <header className="bg-stone-800 text-white font-mono font-bold  flex justify-between p-4 items-center">
      <div className="flex gap-4 items-center">
        <FiltersBar />
        <Button variant="secondary" size="icon" className="size-8">
          <ClearFiltersIcon />
        </Button>
      </div>

      <Search />
    </header>
  );
}

export default CatalogHeader;
