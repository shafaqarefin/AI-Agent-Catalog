import React from "react";
import FiltersBar from "../filters/FiltersMenuBar";
import Search from "../search/Search";
import { Menubar } from "../ui/menubar";
import { ClearFilterButton } from "../filters/ClearFilterIcon";

function CatalogHeader() {
  return (
    <Menubar className="bg-stone-800 text-white p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4  ">
        <FiltersBar />
        <ClearFilterButton />
      </div>

      <div className="w-full sm:w-auto">
        <Search />
      </div>
    </Menubar>
  );
}

export default CatalogHeader;
