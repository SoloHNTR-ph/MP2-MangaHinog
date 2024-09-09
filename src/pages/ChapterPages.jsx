import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export function ChapterPages() {
  const { chapterId } = useParams();
  
  const [title, setTitle] = useState(""); 

  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_MANGADEX_API_BASE_URL}/at-home/server/${chapterId}`
  );

  const { data: chapterData } = useFetch(
    `${import.meta.env.VITE_MANGADEX_API_BASE_URL}/chapter/${chapterId}`
  );

  const [currentPage, setCurrentPage] = useState(0);
  const pages = data?.chapter?.data || [];

  const imageUrl = pages.length > 0 
    ? `${data?.baseUrl}/data/${data?.chapter?.hash}/${pages[currentPage]}`
    : null;

  useEffect(() => {
    if (chapterData?.data?.relationships) {
      const mangaId = chapterData.data.relationships.find(
        (rel) => rel.type === "manga"
      )?.id;

      if (mangaId) {
        
        fetch(`${import.meta.env.VITE_MANGADEX_API_BASE_URL}/manga/${mangaId}`)
          .then((res) => res.json())
          .then((mangaResponse) => {
            setTitle(mangaResponse.data.attributes.title.en || "Unknown Title");
          })
          .catch((err) => console.error("Error fetching manga title:", err));
      }
    }
  }, [chapterData]);

  if (loading) return <p>Loading pages...</p>;
  if (error) return <p>Error fetching pages: {error}</p>;

  return (
    <div className="container">
      <h1 className="text-5xl">
        {title} 
      </h1>
      <div className="sm:col-span-3 w-full justify-center gap-3 items-center flex mt-4">
        <div className="mt-2">
          <select
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>Chapter {data?.chapter?.chapter || "N/A"}</option>
          </select>
        </div>
        <div className="flex justify-between gap-3 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="bg-white p-2 rounded ring-1 ring-inset ring-gray-300"
          >
            Previous Page
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))}
            disabled={currentPage === pages.length - 1}
            className="bg-white p-2 rounded ring-1 ring-inset ring-gray-300"
          >
            Next Page
          </button>
        </div>
      </div>

      <div className="h-screen bg-no-repeat bg-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Page ${currentPage + 1}`}
            className="h-full w-auto mx-auto"
          />
        ) : (
          <p>No pages available</p>
        )}
      </div>
    </div>
  );
}
