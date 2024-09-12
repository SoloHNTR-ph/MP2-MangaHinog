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

  const { data, loading, error } = useFetch(`/at-home/server/${chapterId}`);
  const { data: chapterData } = useFetch(`/chapter/${chapterId}`);

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
      `https://corsproxy.io/https://api.mangadex.org/manga/${mangaId}/feed?translatedLanguage[]=en&limit=20&offset=${page * 20}`
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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <select
            className="block w-full rounded-md border-gray-300 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            onScroll={handleScroll}
            onChange={handleChapterChange}
            value={chapterId}
          >
            <optgroup>
              {chapters.map((chapter) => (
                <option key={chapter.id} value={chapter.id}>
                  Chapter {chapter.attributes.chapter || "N/A"} - {chapter.attributes.title || ""}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 border border-gray-400 rounded-md bg-white text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-50 w-32"
          >
            Previous Page
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))
            }
            disabled={currentPage === pages.length - 1}
            className="px-4 py-2 border border-gray-400 rounded-md bg-white text-gray-700 shadow-sm hover:bg-gray-50 w-32"
          >
            Next Page
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center relative h-[70vh] bg-no-repeat bg-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Page ${currentPage + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <p>No pages available</p>
        )}
      </div>
    </div>
  );
}