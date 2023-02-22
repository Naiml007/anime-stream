import React from "react";
import { useState, useEffect } from "react";
import AnimeCard from "../anime/AnimeCard";
import './releaseStyle.css'

export default function Releases() {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch(`http://localhost:8000/recent_release`);
        const data = await response.json();
        console.log("THIS iS RECENT RELEASES", data)
        setReleases(data.results);
      } catch (e) {
        console.error(e);
      }
    }

    fetchReleases();
  }, []);
  return (


    <div>
      <h2>NEW RELEASES</h2>
      <div className="container">
      {releases.map((anime) => (
        <div key={anime.id}>
          <AnimeCard data={anime} />
        </div>
          ))}
      </div>
      <div>
        HELLLOOOO
      </div>
    </div>

  )
};