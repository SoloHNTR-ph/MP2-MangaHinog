import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export function MangaDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://api.jikan.moe/v4/manga/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { title, synopsis, images, authors, genres, status } = data?.data || {};

  return (
    <div>
      <div className="mt-3 mx-5">
        <div className="flex w-full gap-9">
          <div className="w-48">
            <img src={images?.jpg?.image_url} alt={title} />
          </div>
          <div className="flex flex-col w-full h-auto justify-between">
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-6xl font-extrabold">{title}</h1>
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <h3>{authors?.map((author) => author.name).join(", ")}</h3>
                  <h3>{genres?.map((genre) => genre.name).join(", ")}</h3>
                </div>
                <div className="flex">
                  <h3>{status}</h3>
                </div>
              </div>
            </div>
            <div>
              <h3>Summary:</h3>
              <p>{synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
