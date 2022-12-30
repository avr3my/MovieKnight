import React from "react";
import { Link } from "react-router-dom";
import "./moviecard.css";
import Loader from '../Loader'
import react, { useState, useEffect } from "react";

let load = 0;
export default function MovieCard({ details }) {
  const [loading ,setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      if (details) {
        setLoading(false);
      }
      
    }, 800);
    // console.log(load++);
  }, [details])

  if (loading) {
    return <Loader/>
  }
  if (!details) {
    setLoading(true);
  }

  
  return (
    <>
      {details ? (
        <Link to={"/movie/" + details.id} className="movieblock">
          <div className="details">
            <h5>{details.title}</h5>
            <p className="info">
              {details.release_date}
              <span style={{ float: "right" }}>
                <i class="fa-solid fa-star"></i>
                {details.vote_average}
              </span>
            </p>
            <p className="card-desc">{details.overview.slice(0, 118) + " ..."}</p>
          </div>
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
          />
        </Link>
      ) : (
        <Loader/>
      )}
    </>
  );
}
