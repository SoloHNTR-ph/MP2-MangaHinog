import React from "react";
import { CardSearch } from "../components/Card";
import { Link } from "react-router-dom";

export function Result() {
  return (
    <div className="container">
      <h1>Search Results:</h1>
      <Link to="/MangaDetails">
        <CardSearch />
      </Link>
    </div>
  );
}
