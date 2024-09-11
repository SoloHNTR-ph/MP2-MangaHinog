import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export function ChapterPages() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [chapters, setChapters] = useState([]);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const { data, loading, error } = useFetch(
    `/at-home/server/${chapterId}`
  );

  const { data: chapterData } = useFetch(
    `/chapter/${chapterId}`
  );

  const pages = data?.chapter?.data || [];
  const imageUrl =
    pages.length > 0
      ? `${data?.baseUrl}/data/${data?.chapter?.hash}/${pages[currentPage]}`
      : null;

  useEffect(() => {
    if (chapterData?.data?.relationships) {
      const mangaId = chapterData.data.relationships.find(
        (rel) => rel.type === "manga"
      )?.id;

      if (mangaId) {
        fetch(`/manga/${mangaId}`)
          .then((res) => res.json())
          .then((mangaResponse) => {
            setTitle(mangaResponse.data.attributes.title.en || "Unknown Title");
          })
          .catch((err) => console.error("Error fetching manga title:", err));

        fetchChapters(mangaId);
      }
    }
  }, [chapterData, page]);

  const fetchChapters = (mangaId) => {
    fetch(
      `https://corsproxy.io/?https://api.mangadex.org/manga/${mangaId}/feed?translatedLanguage[]=en&limit=20&offset=${
        page * 20
      }`
    )
      .then((res) => res.json())
      .then((chapterResponse) => {
        const sortedChapters = chapterResponse.data.sort((a, b) => {
          const chapterA = parseFloat(a.attributes.chapter) || 0;
          const chapterB = parseFloat(b.attributes.chapter) || 0;

          if (chapterA && chapterB) {
            return chapterB - chapterA;
          }

          return (
            new Date(b.attributes.publishAt) - new Date(a.attributes.publishAt)
          );
        });

        setChapters((prevChapters) => [...prevChapters, ...sortedChapters]);
        setIsFetching(false);
      })
      .catch((err) => console.error("Error fetching chapters:", err));
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight && !isFetching) {
      setIsFetching(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleChapterChange = (e) => {
    const selectedChapterId = e.target.value;
    if (selectedChapterId) {
      navigate(`/chapter/${selectedChapterId}`);
    }
  };

  if (loading) return <p>Loading pages...</p>;
  if (error) return <p>Error fetching pages: {error}</p>;

  return (
    <div className="container">
      <h1 className="text-5xl">{title}</h1>

      <div className="sm:col-span-3 w-full justify-center gap-3 items-center flex mt-4">
        <div className="mt-2">
          <select
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 overflow-y-auto overflow-y-scroll h-auto"
            onScroll={handleScroll}
            onChange={handleChapterChange}
            value={chapterId}
          >
            <optgroup>
              {chapters.map((chapter) => (
                <option key={chapter.id} value={chapter.id} className="py-2">
                  Chapter {chapter.attributes.chapter || "N/A"} -{" "}
                  {chapter.attributes.title || ""}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
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
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))
          }
          disabled={currentPage === pages.length - 1}
          className="bg-white p-2 rounded ring-1 ring-inset ring-gray-300"
        >
          Next Page
        </button>
      </div>

      <div className="h-screen bg-no-repeat bg-center overflow-y-auto">
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
