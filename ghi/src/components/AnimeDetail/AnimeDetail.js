import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detailStyles.css";
import DropdownMenu from "../EpDropDown/DropDown";

export default function AnimeInfo() {
  const { id } = useParams();
  const [animeInfo, setAnimeInfo] = useState("");

  useEffect(() => {
    async function fetchAnimeInfo() {
      try {
        const response = await fetch(`http://localhost:8000/details/${id}`);
        const data = await response.json();
        setAnimeInfo(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchAnimeInfo();
  }, []);

  return (
    <>
      <div className="container">
        <img src={animeInfo.image} className="anime-img" alt="cover" />
        {animeInfo ? (
          <>
            <div className="detail">
              <div>
                <h1>{animeInfo.title}</h1>
                <p>
                  <span>Detail: </span> {animeInfo.description}
                </p>
                <p>
                  <span>Release Date: </span> {animeInfo.releaseDate}
                </p>
                <p>
                  <span>Status: </span> {animeInfo.status}
                </p>
                <p>
                  <span>Genre: </span> {animeInfo.genres.join(", ")}
                </p>
                <p>
                  <span>Other name: </span> {animeInfo.otherName}
                </p>
              </div>
            </div>
            <DropdownMenu animeInfo={animeInfo} />
          </>
        ) : null}
      </div>
    </>
  );
}
