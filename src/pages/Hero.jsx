import React from "react";
import { MostSearched } from "../components/ui/MostSearch";

export function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-5  gap-6 w-full ">
        <h2 className="text-[60px] font-bold">Welcome To Manga Hinog</h2>
      </div>
      <MostSearched />
    </div>
  );
}
