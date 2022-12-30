import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import "./search.css";
const api =
  "https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=";

export default function Search() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState();
  useEffect(() => {

    if (search){fetch(api + search.replace(" ", "+"))
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });}
  }, [search]);


  // console.log("movie results at 'Search':",movies);
  return (
    <>
      <div className="search-area">

        <input
          type="search"
          name=""
          id=""
          placeholder="Search movie"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {search && movies && (
        <div className="results">
          <ul>
            {movies.map((movie) => {
              return (
                <Link onClick={()=>setSearch("")} className="search-movie-link" to={"/movie/" + movie.id}>
                  {movie.poster_path && <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="small-poster" /> ||<Skeleton/>}
                  <span className="search-movie-name">
                    {movie.title.length > 20? movie.title.slice(0,16) + '...' : movie.title.slice(0,19)}
                    </span>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
