import React from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    return navigate(`/result?search=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="hidden md:flex gap-4 items-center">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        autoComplete="off"
        className="border border-gray-300 rounded px-4 py-2"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:text-accent-foreground">
        Search
      </button>
    </form>
  );
}
