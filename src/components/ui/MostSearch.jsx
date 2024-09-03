import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const MostSearched = () => {
  const { data: mangaList } = useFetch("manga"); // Adjust endpoint as needed

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-[40px] font-bold">Most Searched Manga</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6">
        {mangaList && mangaList.length > 0 ? (
          mangaList.slice(0, 8).map((manga, index) => {
            const mangaTitle = manga.data.attributes.title.en || "No Title";
            const mangaId = manga.data.id;
            const coverId = manga.coverId;

            // Construct the cover URL
            const mangaCoverUrl = coverId
              ? `https://uploads.mangadex.org/covers/${mangaId}/${coverId}.256.jpg`
              : "https://via.placeholder.com/150";

            return (
              <Link to="/MangaDetails" key={index} className="group relative block bg-black">
                <img
                  alt={mangaTitle}
                  src={mangaCoverUrl}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {mangaTitle}
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        {manga.data.attributes.description.en
                          ? manga.data.attributes.description.en.slice(0, 100) + "..."
                          : "No description available."}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};