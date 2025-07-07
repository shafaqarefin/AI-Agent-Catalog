import React from "react";
import FiltersBar from "../filters/FiltersMenuBar";
import Search from "../search/Search";
import { ClearFilterButton } from "../filters/ClearFilterIcon";

function CatalogHeader() {
  return (
    <header className="bg-stone-800 text-white p-4 sm:p-6 w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 sm:flex-nowrap w-full sm:w-auto min-w-0">
          <FiltersBar />
          <ClearFilterButton />
        </div>

        <div className="w-full sm:w-auto min-w-0">
          <Search />
        </div>
      </div>
    </header>
  );
}

export default CatalogHeader;
