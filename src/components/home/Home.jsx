import React, { useEffect, useState } from "react";
import MovieGroup from "../moviegroup/MovieGroup";
import Photoslider from "../slide/Photoslider";
import Error from "../Error";
export default function Home() {
  const [movies, setMovies] = useState();
  async function getMovies() {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      res = await res.json();
      setMovies(res);
    } catch (error) {
      return <Error />;
    }
  }
  useEffect(() => {
    document.title = "Home";
    getMovies();
  }, []);
  return (
    <div>
      <Photoslider movies={movies} />
      <MovieGroup category={"Popular"} />
      <h1
        style={{
          width: "100vw",
          textAlign: "center",
          padding: "10px 0 30px 0",
          color: "white",
        }}
      >
        Created by <i>@avr3my</i>
      </h1>
    </div>
  );
}
