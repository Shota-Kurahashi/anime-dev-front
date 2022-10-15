import React from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { HomeIcon, BellIcon } from "@heroicons/react/24/outline";

export const Footer = () => (
  <footer className="fixed  bottom-0 z-10 flex h-20 w-full flex-row  items-center border-t bg-white md:z-10 md:flex md:h-full  md:w-20 md:flex-col md:justify-between  md:border-t-0 md:border-r md:pt-16">
    <div className="mb-10 hidden  md:block">ICON</div>
    <div className="flex w-full flex-row items-center md:flex-col md:space-y-10">
      <div className="group basis-1/5 cursor-pointer md:order-[-2] md:basis-0">
        <button
          type="button"
          className="mx-auto flex h-10  w-12 flex-col items-center justify-center text-center"
        >
          <span className="inline-block h-[1px] w-3/4 -translate-y-4 bg-black" />
          <span className="inline-block h-[1px] w-3/4 bg-black" />
          <span className="inline-block h-[1px] w-3/4 translate-y-4 bg-black" />
        </button>
      </div>
      <div className="group relative basis-1/5 cursor-pointer md:basis-0">
        <HomeIcon className="group mx-auto h-10 w-10 stroke-[0.5px] transition-all group-active:scale-90" />
        <div className=" pointer-events-none absolute left-[150%] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded bg-black p-2 text-xs text-white opacity-0 transition-all duration-500  before:absolute before:top-1/2 before:right-full before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-black before:content-[''] group-hover:-translate-x-[5%] group-hover:opacity-100 md:block">
          ホーム
        </div>
      </div>
      <div className=" relative basis-1/5 cursor-pointer md:order-1 md:basis-0 ">
        <div className="relative mx-auto flex h-14 w-14 flex-col items-center justify-center rounded-full bg-ct-red-500 text-white">
          <span className=" absolute top-1/2 left-1/2 inline-block h-[2px] w-1/2  -translate-y-1/2 -translate-x-1/2 bg-white" />
          <span className="absolute top-1/2 left-1/2 inline-block h-[2px] w-1/2  -translate-y-1/2 -translate-x-1/2 rotate-90 bg-white" />
        </div>
      </div>
      <div className="group relative basis-1/5 cursor-pointer md:basis-0 ">
        <BellIcon className="mx-auto h-10 w-10 stroke-[0.5px] transition-all group-active:scale-90" />
        <div className="pointer-events-none absolute left-[150%] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded bg-black p-2 text-xs text-white opacity-0 transition-all duration-500 before:absolute before:top-1/2  before:right-full before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-black before:content-[''] group-hover:-translate-x-[5%] group-hover:opacity-100 md:block">
          通知
        </div>
      </div>
      <div className="group relative basis-1/5 cursor-pointer md:order-[-1] md:basis-0">
        <UserCircleIcon className="mx-auto h-10 w-10 text-gray-500 transition-all group-active:scale-90" />
        <div className=" pointer-events-none absolute left-[150%] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded bg-black p-2 text-xs text-white opacity-0 transition-all duration-500  before:absolute before:top-1/2 before:right-full before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-black before:content-[''] group-hover:-translate-x-[5%] group-hover:opacity-100 md:block">
          ログイン
        </div>
      </div>
    </div>
    <div className="mt-10 hidden h-10 w-full pb-16 md:block" />
  </footer>
);
