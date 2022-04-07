import { useState, useEffect } from "react";

function useSearch() {
  const [searchData, setSearchData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = "yGdLhGNF0uSsCtyBLW2X3uHDKvA33hHs";

  useEffect(() => {
    if (!searchTerm) return;

    setSearchData(false);

    fetch(
      `https://api.opensubtitles.com/api/v1/subtitles?query=${searchTerm.toLowerCase()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": apiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (!result.data.length) {
          setSearchData(undefined);
          return;
        }
        const related_links = result.data[0].attributes.related_links;
        let image = Array.isArray(related_links)
          ? related_links[0].img_url
          : related_links.img_url;
        result = result.data
          .filter((item) => item.attributes.language === "en")
          .map((item) => ({
            release: item.attributes.release,
            movie_name: item.attributes.feature_details.movie_name,
            language: "English",
            id: item.attributes.files[0].file_id,
            fps: item.attributes.fps,
          }));

        setSearchData({ image, items: result });
      })
      .catch(() => {
        setSearchData("error");
      });
  }, [searchTerm]);

  return [searchData, setSearchTerm, searchTerm];
}

export default useSearch;
