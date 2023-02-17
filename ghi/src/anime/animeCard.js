import React from "react";


export default function AnimeCard(props) {

  return (
    <div>
      <img src={props.data.image} alt="cover"/><br />
      <h1>
      {props.data.title}
      </h1>
      {props.data.description}
    </div>
  );
}