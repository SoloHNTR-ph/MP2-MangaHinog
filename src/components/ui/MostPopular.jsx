import React from "react";
import { Link } from "react-router-dom";
import { MangaCard } from "../Card";
import useFetch from "../../hooks/useFetch";

export const MostPopular = () => {
  const { data, loading, error } = useFetch('https://api.jikan.moe/v4/top/manga?limit=8');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-[40px] font-bold">Most Popular</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6">
        {data?.data.map((manga) => (
          <Link to={`/manga/${manga.mal_id}`} key={manga.mal_id}>
            <MangaCard
              title={manga.title}
              synopsis={manga.synopsis || "No synopsis available"}
              imageUrl={manga.images.jpg.image_url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
