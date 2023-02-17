import React from "react";

const fetchReleases = async ({ queryKey }) => {
  const releases = queryKey[1];

  if (!releases) return [];

  const apiRes = await fetch(`http://localhost:8000/recent_release`);

  if (!apiRes.ok) {
    throw new Error(`fetch not ok`);
  }

  console.log(apiRes.json());
  return apiRes.json();
};

export default fetchReleases;
