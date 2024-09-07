import React from "react";
import { useLocation } from "react-router-dom";
import { CardSearch } from "../components/Card";
import useFetch from "../hooks/useFetch";

export const Result = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const { data, loading, error } = useFetch(`your-api-url-here?search=${query}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Search Results for "{query}":</h1>
      {data?.map((manga) => (
        <Link key={manga.mal_id} to={`/manga/${manga.mal_id}`}>
          <CardSearch manga={manga} />
        </Link>
      ))}
    </div>
  );
};
