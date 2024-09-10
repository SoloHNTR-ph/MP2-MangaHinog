import React from "react";
import { Link } from "react-router-dom";
import { MangaCard } from "../Card";
import useFetch from "../../hooks/useFetch";

export const MostPopular = () => {
  const { data, loading, error } = useFetch(
    `/manga?limit=8&includes[]=cover_art&order[followedCount]=desc`, {
      mode: "no-cors",
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-[40px] font-bold">Most Popular</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6">
        {data?.data.map((manga) => {
          const cover = manga.relationships.find(
            (rel) => rel.type === "cover_art"
          );
          const coverFileName = cover ? cover.attributes.fileName : null;

          return (
            <Link to={`/manga/${manga.id}`} key={manga.id}>
              <MangaCard
                title={manga.attributes.title.en}
                synopsis={
                  manga.attributes.description?.en || "No synopsis available"
                }
                imageUrl={
                  coverFileName
                    ? `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}.256.jpg`
                    : "https://via.placeholder.com/256x400.png?text=No+Cover"
                }
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
