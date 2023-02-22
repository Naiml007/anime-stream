import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimeCard from "./AnimeCard";

export default function AnimeInfo() {
  const { id } = useParams();
  const [animeInfo, setAnimeInfo] = useState("");

  useEffect(() => {
    async function fetchAnimeInfo() {
      try {
        const response = await fetch(`http://localhost:8000/details/${id}`);
        const data = await response.json();
        console.log("INFO HEREEEEEEEEE", data);
        setAnimeInfo(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchAnimeInfo();
  }, []);

  return (
    <div>
      <div className="container">
      {animeInfo ? 
        <AnimeCard data={animeInfo} /> : null
      }
      </div>
   </div>
  )
}
