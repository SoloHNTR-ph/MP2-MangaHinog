import React from "react";
import { CardSearch } from "../components/Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export function Result() {
  return (
    <div className="container">
      <h1>Search Results:</h1>
      <Link to={`/manga/${manga.mal_id}`}>
        <CardSearch />
      </Link>
    </div>
  );
}
