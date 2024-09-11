import React from "react";
import { useLocation } from "react-router-dom";
import { CardSearch } from "../components/Card";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export const Result = () => {
  const query = new URLSearchParams(useLocation().search).get("search");
  const { data, loading, error } = useFetch(
    query
      ? `/manga?title=${query}&limit=10&includes[]=cover_art`
      : null
  );

  if (!query) return <p>Please enter a Manga.</p>;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container flex flex-col gap-2">
      <h1>Search Results for "{query}":</h1>
      {data?.data?.map((manga, index) => {
        const cover = manga.relationships.find((rel) => rel.type === "cover_art");
        const coverFileName = cover ? cover.attributes.fileName : null;

        return (
          <Link key={`${manga.id}-${index}`} to={`/manga/${manga.id}`}>
            <CardSearch
              imageUrl={
                coverFileName
                  ? `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}.256.jpg`
                  : "https://via.placeholder.com/256x400.png?text=No+Cover"
              }
              title={manga.attributes.title.en || "No title available"}
              status={manga.attributes.status || "Unknown status"}
              genre={manga.attributes.tags?.map((tag) => tag.attributes.name.en).join(", ") || "No genres available"}
              synopsis={manga.attributes.description?.en || "No synopsis available"}
              
            />
          </Link>
        );
      })}
    </div>
  );
};
