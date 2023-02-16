import React from "react";
import { useState, useEffect } from "react";


export default function Releases() {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch(`http://localhost:8000/recent_release`);
        const data = await response.json();
        console.log("THIS iS THE DATA", data)
        setReleases(data.results);
      } catch (e) {
        console.error(e);
      }
    }

    fetchReleases();
  }, []);

  return (

    <div>
      {releases.map(anime => (
        <div key={anime.id}>
          Title: {anime.title} -- Episode: {anime.episodeNumber} <br />
          <img width="250px" src={anime.image} alt="Cover"/>
        </div>

          ))}
    </div>

  )
};