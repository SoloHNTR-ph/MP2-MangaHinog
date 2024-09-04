import React from "react";
import { Link } from "react-router-dom";
import { MangaCard } from "../Card";

export const MostSearched = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-[40px] font-bold">
        Latest Updates
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6 ">
        {[...Array(8)].map((_, index) => (
          <Link to="MangaDetails">
            <MangaCard />
          </Link>
        ))}
      </div>
    </div>
  );
};
