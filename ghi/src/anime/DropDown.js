import React from "react";
// import ReactPlayer from "react-player";


export default function DropdownMenu(props) {
  return (
    <div className="dropdown" >
        <button className="dropbtn">{props.animeInfo.id}
        </button>
        <div className="dropdown-content">
        {props.animeInfo.episodes.map((episode) => (
            <ul key={episode.id}>
            <li ><a href={episode.url}>
              Episode {episode.number}
            </a></li>
            </ul>
              
          ))}
          </div>
        </div>
  )
}