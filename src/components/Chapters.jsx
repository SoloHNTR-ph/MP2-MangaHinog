import React from "react";
import { Link } from "react-router-dom";

export const Chapters = () => {
  return (
    <div>
      <h1>Chapters:</h1>
      <div className="flex flex-col gap-3">
        {[...Array(20)].map((_, index) => (
          <Link to="ChapterPages">
            <div className=" flex justify-between px-3 mx-3 border-2 border-black rounded-md">
              <div>Chapter 000</div>
              <div>Time Released</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
