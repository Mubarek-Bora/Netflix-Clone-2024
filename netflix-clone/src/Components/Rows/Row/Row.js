import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import "./Row.css"
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, [fetchUrl]);
return (
    <div className="row">
      <h2>{title}</h2>
      {/* { Movie posters go here } */}
    </div>
  );
}  

export default Row; 
