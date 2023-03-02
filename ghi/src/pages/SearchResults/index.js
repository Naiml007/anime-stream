import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SearchResults() {
  const [animeData, setAnimeData] = useState([]);
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/search/?query=${query}`
        );
        const data = await response.json();
        setAnimeData(data.results);
      } catch (e) {
        console.log("ERROR with search", e);
      }
    };

    setSearchResults(
      animeData.filter((anime) =>
        anime.title.toLowerCase().includes(query.toLowerCase())
      )
    );

    fetchSearch();
  }, [animeData, query]);

  return (
    <>
      <div>
        {searchResults.map((anime) => (
          <p key={anime.id}>{anime.title}</p>
        ))}
      </div>
    </>
  );
}
