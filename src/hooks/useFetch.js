import { useState, useEffect } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const fullUrl = `https://api.mangadex.org/${endpoint}`;

  useEffect(() => {
    async function fetchManga() {
      try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();

        if (json.data) {
          const mangaWithCovers = json.data.map((manga) => {
            const coverId = manga.relationships.find(
              (rel) => rel.type === "cover_art"
            )?.id;

            return {
              data: manga,
              coverId: coverId || null,
            };
          });

          setData(mangaWithCovers);
        }
      } catch (error) {
        console.error("Failed to fetch manga data:", error);
      }
    }

    fetchManga();
  }, [fullUrl]);

  return { data };
};
