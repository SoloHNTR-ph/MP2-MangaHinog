import React from "react";
import { MostPopular } from "../components/ui/MostPopular";

export function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-5  gap-6 w-full ">
        <h2 className="text-[60px] font-bold">Welcome To Manga Hinog</h2>
      </div>
      <MostPopular />
    </div>
  );
}
