import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export const Chapters = () => {
  const { id } = useParams();
  const [chapters, setChapters] = useState([]);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const { data, loading, error } = useFetch(
    `${
      import.meta.env.VITE_MANGADEX_API_BASE_URL
    }/manga/${id}/feed?translatedLanguage[]=en&order[chapter]=desc&limit=20&offset=${page * 20}`
  );

  // Append the new chapters when data is fetched
  useEffect(() => {
    if (data?.data) {
      setChapters((prevChapters) => [...prevChapters, ...data.data]);
      setIsFetching(false);
    }
  }, [data]);

  // Listen to scroll event for infinite scrolling inside the container
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight && !isFetching) {
      setIsFetching(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && page === 0) return <p>Loading chapters...</p>;
  if (error) return <p>Error fetching chapters: {error}</p>;

  return (
    <div>
      <h1>Chapters:</h1>
      <div
        className="flex flex-col gap-3 overflow-y-auto"
        style={{ maxHeight: "400px" }} // Set the container height
        onScroll={handleScroll}
      >
        {chapters.length > 0 ? (
          chapters.map((chapter) => (
            <Link
              to={`/chapter/${chapter.id}`}
              key={chapter.id}
              className="flex justify-between px-3 mx-3 border-2 border-black rounded-md"
            >
              <div>Chapter {chapter.attributes.chapter || "N/A"}</div>
              <div>
                {new Date(chapter.attributes.publishAt).toLocaleString()}
              </div>
            </Link>
          ))
        ) : (
          <p>No chapters available.</p>
        )}
        {isFetching && <p>Loading more chapters...</p>}
      </div>
    </div>
  );
};
