"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className="border-[1px]  md:w-auto py-2 h-10  rounded-full shadow-sm hover:shadow-lg transition-all cursor-pointer mt-1">
      <div className="flex flex-row item-center justify-between py-auto">
        <div className="text-sm font-semibold px-6 ">Anywhere</div>
        <div className="hidden lg:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        <div className="block  text-sm font-semibold px-6 border-x-[1px] flex-1 text-center text-gray-500 lg:w-56">
          <div className="flex gap-3 w-full">
            <div className="w-full">Add Guests</div>
            <div className=" hidden sm:block p-2 rounded-full  bg-rose-500 text-white -mt-[6px]">
              <BiSearch className="text-base"/>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Search;
