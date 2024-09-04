import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <Link to="/">
        <img src="/manga.svg" width={350} height={150} alt="Logo" />
      </Link>

      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:primary-color">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:primary-color">
          Browse
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:primary-color">
          Latest Update
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-4 py-2"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:text-accent-foreground">
          <Link to="/result">Search</Link>
        </button>
      </div>
    </div>
  );
}
