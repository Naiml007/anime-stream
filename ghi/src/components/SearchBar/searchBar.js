import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search Anime"
        value={query}
        onChange={handleChange}
      />
      <Link to={`/search/${query}`}>
        <button type="submit" disabled={!query}>
          Search Anime
        </button>
      </Link>
    </form>
  );
}
