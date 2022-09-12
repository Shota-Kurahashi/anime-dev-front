import React from "react";
import {
  CurrencyEuroIcon,
  BoltIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  GlobeAltIcon,
  ListBulletIcon,
  BookmarkSquareIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export const Nav = () => (
  <div className="flex w-full flex-wrap border-b">
    <div className="flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center border-r border-b p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-300">
      <CurrencyEuroIcon className=" mb-2 h-6 w-6" />
      <span>アニメ</span>
    </div>
    <div className=" flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center border-r border-b p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-500">
      <PresentationChartLineIcon className=" mb-2 h-6 w-6" />
      ドラマ
    </div>
    <div className=" flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center border-b p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-500">
      <GlobeAltIcon className=" mb-2 h-6 w-6" />
      映画
    </div>
    <div className=" flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center border-r border-b p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-500">
      <BookOpenIcon className="mb-2 h-6 w-6" />
      マンガ
    </div>
    <div className=" flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center border-r border-b p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-500">
      <BookmarkSquareIcon className="mb-2 h-6 w-6" />
      同人誌
    </div>
    <div className=" flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center border-b p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-500">
      <MusicalNoteIcon className="mb-2 h-6 w-6" />
      音楽
    </div>
    <div className=" flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center border-r p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-500">
      <ComputerDesktopIcon className="mb-2 h-6 w-6" />
      テレビ
    </div>
    <div className=" flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center border-r  p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-500">
      <BoltIcon className="mb-2 h-6 w-6" />
      新着
    </div>
    <div className=" flex basis-1/3 animate-appear cursor-pointer flex-col items-center justify-center  p-2 font-bold transition-all hover:bg-gray-100 hover:text-ct-red-500">
      <ListBulletIcon className="mb-2 h-6 w-6" />
      一覧
    </div>
  </div>
);
