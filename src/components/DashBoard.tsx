import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Nav } from "./layout/Nav";
import { Popular } from "./posts/Popular";

export const DashBoard = () => (
  <div className="h-full w-full">
    <Nav />
    <div className="h-full w-full pt-4">
      <h4 className="flex cursor-pointer items-center px-6 text-pink-500">
        ランキング
        <ChevronRightIcon className="h-8 w-8 md:h-12 md:w-12" />
      </h4>
      <Popular />
    </div>
  </div>
);
