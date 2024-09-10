import React from "react";
import { MostPopular } from "../components/ui/MostPopular";
import { Recomend } from "../components/Recomend";


export function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-5  gap-6 w-full ">
        <h2 className="text-[60px] font-bold">Latest Updates</h2>
        <Recomend/>
      </div>
      <MostPopular />
    </div>
  );
}
