import React from "react";
import './cardStyle.css'


export default function AnimeCard(props) {

  return (
    <div className="card">
      <div className="card-content">    
      <img src={props.data.image} className="card-img" alt="cover"/><br />
      <h1>{props.data.title}</h1>
          Episode #: {props.data.episodeNumber}      
      </div>
    </div>
  );
} 