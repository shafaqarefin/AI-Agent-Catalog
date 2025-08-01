"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppDispatch } from "@/store/hooks";
import { clearFilters, applyFilters } from "@/store/features/agent/agentSlice";

export function ClearFilterButton() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearFilters());
    dispatch(applyFilters());
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="size-8"
            onClick={handleClick}
            aria-label="Clear filters"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 122.88 110.668"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M91.124,15.645c12.928,0,23.406,10.479,23.406,23.406
                c0,12.927-10.479,23.406-23.406,23.406c-12.927,0-23.406-10.479-23.406-23.406C67.718,26.125,78.197,15.645,91.124,15.645z 
                M2.756,0h117.322c1.548,0,2.802,1.254,2.802,2.802c0,0.848-0.368,1.622-0.996,2.139l-10.667,13.556
                c-1.405-1.375-2.95-2.607-4.614-3.672l6.628-9.22H9.43l37.975,46.171c0.59,0.516,0.958,1.254,0.958,2.102v49.148l21.056-9.623
                V57.896c1.651,1.9,3.548,3.582,5.642,4.996v32.133c0,1.105-0.627,2.064-1.586,2.506l-26.476,12.758
                c-1.327,0.773-3.023,0.332-3.798-1.033c-0.258-0.441-0.368-0.92-0.368-1.4V55.02L0.803,4.756c-1.07-1.106-1.07-2.839,0-3.945
                C1.355,0.258,2.056,0,2.756,0z M96.93,28.282c1.328-1.349,3.489-1.355,4.825-0.013c1.335,1.342,1.341,3.524,0.013,4.872
                l-5.829,5.914l5.836,5.919c1.317,1.338,1.299,3.506-0.04,4.843c-1.34,1.336-3.493,1.333-4.81-0.006l-5.797-5.878l-5.807,5.889
                c-1.329,1.349-3.489,1.355-4.826,0.013c-1.335-1.342-1.341-3.523-0.013-4.872l5.83-5.913l-5.836-5.919
                c-1.317-1.338-1.3-3.507,0.04-4.843c1.339-1.336,3.492-1.333,4.81,0.006l5.796,5.878L96.93,28.282z"
              />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Clear all filters</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
