import React from "react";
import { useState, useEffect } from "react";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import "./releaseStyle.css";
// import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import SearchAnime from "../SearchResults";

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
      {/* <div>
        <ReactPlayer
          controls
          width="640px"
          height="360px"
          volume={0.5}
          url="https://wwwx13.gofcdn.com/videos/hls/jeMmwuTd2_TUP6MdgtFmew/1677557700/199052/8989c12656ede0d12b50e2c9cf22402c/ep.6.1676225831.1080.m3u8"
        />
      </div> */}
      <SearchAnime />
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
