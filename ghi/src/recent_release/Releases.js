import React from "react";
import { useState, useEffect } from "react";
import AnimeCard from "../anime/AnimeCard";
import "./releaseStyle.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function Releases() {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch(`http://localhost:8000/recent_release`);
        const data = await response.json();
        console.log("THIS iS RECENT RELEASES", data);
        setReleases(data.results);
      } catch (e) {
        console.error(e);
      }
    }

    fetchReleases();
  }, []);

  return (
    <div>
      <div>
        HELLOOOOO <br />
        <ReactPlayer
          controls
          width="640px"
          height="360px"
          volume={0.5}
          url="https://wwwx12.gofcdn.com/videos/hls/1aTSAgciDwxGHDXrRENMsQ/1677293882/184141/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1657688325.1080.m3u8"
        />
      </div>
      <h2>NEW RELEASES</h2>
      <div className="container">
        {releases.map((anime) => (
          <div className="hello" key={anime.id}>
            <Link to={`/details/${anime.id}`}>
              <button className="card-btn" type="button">
                <AnimeCard data={anime} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
