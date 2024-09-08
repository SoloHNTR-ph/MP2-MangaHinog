import React from "react";
import { useLocation } from "react-router-dom";
import { CardSearch } from "../components/Card";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export const Result = () => {
  const query = new URLSearchParams(useLocation().search).get("search");
  const { data, loading, error } = useFetch(
    query ? `https://api.jikan.moe/v4/manga?q=${query}&limit=10` : null
  );

  if (!query) return <p>Please enter a Manga.</p>;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Search Results for "{query}":</h1>
      {data?.data?.map((manga, index) => (
        <Link key={`${manga.mal_id}-${index}`} to={`/manga/${manga.mal_id}`}>
          <CardSearch
            imageUrl={manga.images.jpg.image_url}
            title={manga.title}
            ranking={manga.ranking}
            status={manga.status}
            genre={manga.genre}
            synopsis={manga.synopsis}
          />
        </Link>
      ))}
    </div>
  );
};
