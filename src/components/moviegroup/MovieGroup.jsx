
import './moviegroup.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import MovieCard from "../moviecard/MovieCard";



export default function MovieGroup({ category }) {
  let arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
  const { id } = useParams();
  const [movies, setMovies] = useState();
  async function getMovies() {
    let api_by_category = `https://api.themoviedb.org/3/movie/${
      category === "Top rated"
        ? "top_rated"
        : category === "Upcoming movies"
        ? "upcoming"
        : category === "Popular"
        ? "popular"
        : ""
    }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    let api_by_genre = 'https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`&with_genres='+id;
    let api = id?api_by_genre:api_by_category;
     
    let res = await fetch(api);
    res = await res.json();
    // console.log("(movie group) Movies list:", res);
    setMovies(res);
  }
  useEffect(() => {
    document.title = !id ? category: "Genre "+ id;
    getMovies();
  }, [category, id]);
 

  return (
    <div className="movies-container">
      <h2 style={{ color: "white" }}>{category}</h2>
      <div className=" d-flex flex-wrap justify-content-center">
        {movies ?movies.items
          ? movies.items.map((movie) => <MovieCard details={movie} />)
          :
          movies.results.map((movie) => <MovieCard details={movie} />)
          : arr.map((i,key) => <Loader key={key}  />)}
      </div>
    </div>
  );
}
