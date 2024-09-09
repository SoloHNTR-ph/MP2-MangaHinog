import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Chapters } from "../components/ui/Chapters";

export function MangaDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${
      import.meta.env.VITE_MANGADEX_API_BASE_URL
    }/manga/${id}?includes[]=author&includes[]=artist&includes[]=cover_art`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { title, description, status } = data?.data?.attributes || {};

  const cover = data?.data?.relationships?.find(
    (rel) => rel.type === "cover_art"
  );
  const coverFileName = cover ? cover.attributes.fileName : null;

  const authors = data?.data?.relationships?.filter(
    (rel) => rel.type === "author" || rel.type === "artist"
  );

  const genres = data?.data?.attributes?.tags?.map(
    (tag) => tag.attributes.name.en
  );

  return (
    <div>
      <div className="mt-3 mx-5">
        <div className="flex w-full gap-9">
          <div className="w-48">
            <img
              src={
                coverFileName
                  ? `https://uploads.mangadex.org/covers/${id}/${coverFileName}.256.jpg`
                  : "https://via.placeholder.com/256x400.png?text=No+Cover"
              }
              alt={title}
            />
          </div>
          <div className="flex flex-col w-full h-auto justify-between">
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-6xl font-extrabold">
                {title?.en || "No title available"}
              </h1>
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <h3>
                    {authors
                      ?.map((author) => author.attributes.name)
                      .join(", ") || "No authors available"}
                  </h3>
                  <h3>{genres?.join(", ") || "No genres available"}</h3>
                </div>
                <div className="flex">
                  <h3>{status || "Unknown status"}</h3>
                </div>
              </div>
            </div>
            <div>
              <h3>Summary:</h3>
              <p>{description?.en || "No description available"}</p>
            </div>
          </div>
        </div>
        <Chapters/>
      </div>
    </div>
  );
}
