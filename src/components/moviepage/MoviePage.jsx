import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./moviepage.css";
import Error from "../Error";

export default function MoviePage() {
  const { id } = useParams();
  const api = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
  const [movie, setMovie] = useState();
  async function getMovie() {
    let res = await fetch(api);
    res = await res.json();
    setMovie(res);
  }
  useEffect(() => {
    getMovie();
  }, [id]);

  if (movie && movie.success === false) {
    return <Error />;
    //navigate to error page
  }

  console.log("(in movie page) movie details:", movie);

  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444" duration={1.5}>
        <div className="movie-page">
          <div className="movie-image-div">
            {(movie && (
              <img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt=""
              />
            )) || <Skeleton className="movie-image-div" />}
            <div className="pseudo-image"></div>
            {(movie && movie.poster_path && (
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            )) || <Skeleton className="movie-poster" />}
            <div className="movie-name-and-details">
              {movie ? (
                <div className="half-size">
                  <h1>{movie.title}</h1>
                  <p className="tag">{movie.tagline}</p>
                  <p className="rank">
                    <i class="fa-solid fa-star"></i>
                    {movie.vote_average.toFixed(1)}
                    <span style={{ marginLeft: "1rem" }}>
                      ({movie.vote_count}) votes
                    </span>
                  </p>
                  <p className="time">{movie.runtime} minutes</p>
                  <p className="release-date">
                    Release date: {movie.release_date}
                  </p>
                  <div className="genres">
                    {movie.genres.map((g, index) => (
                      <Link
                        to={"/genre/" + g.id}
                        key={index}
                        className="genre-link"
                      >
                        {g.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="half-size"></div>
              )}
              <div className="half-size">
                <h2>Synopsis</h2>
                <p className="desc">
                  {movie ? movie.overview : <Skeleton count={5} />}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>

      {movie && (movie.imdb_id || movie.homepage) && (
        <div className="usefull-links">
          <ul>
            <li>Useful Links</li>
            {movie.homepage && (
              <li className="homepage">
                <a target="blank" href={movie.homepage}>
                  Homepage <i class="newTab fas fa-external-link-alt"></i>
                </a>
              </li>
            )}
            {movie.imdb_id && (
              <li className="imdb">
                <a
                  target="blank"
                  href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                >
                  IMDb <i class="newTab fas fa-external-link-alt"></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
      {movie && movie.production_companies.length > 0 && (
        <div className="production-companies">
          <h1>Production companies</h1>
          <div className="production-logos">
            {movie.production_companies.map((company) => {
              if (company.logo_path)
                return (
                  <div>
                    <img
                      key={company.id}
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        company.logo_path
                      }
                      alt=""
                    />
                    <p>{company.name}</p>
                  </div>
                );
            })}
          </div>
        </div>
      )}
    </>
  );
}

//https://image.tmdb.org/t/p/original
