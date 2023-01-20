import "./slide.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function ImageSlider({ movies }) {
  const [ImageIndex, setImageIndex] = useState(0);
  let images = [];
  let images_small =[]
  if (movies) {
    movies.results.forEach((movie) => {
      images.push(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
      images_small.push(`https://image.tmdb.org/t/p/original${movie.poster_path}`);
    });
  }

  const prevImage = () => {
    const newIndex = ImageIndex - 1;
    setImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };
  const nextImage = () => {
    const newIndex = ImageIndex + 1;
    setImageIndex(newIndex === images.length ? 0 : newIndex);
  };

  return (
    <>
    <div className="slider big-screen">
      <img src={images[ImageIndex]} />
      <button className="btnn" onClick={nextImage}>
        <i className="fa-solid fa-caret-right"></i>
      </button>
      <button className="btnn" onClick={prevImage}>
        <i className="fa-solid fa-caret-left"></i>
      </button>
      {movies ? (
        <Link
          to={"/movie/" + movies.results[ImageIndex].id}
          className="movie-details"
        >
          <h5>{movies.results[ImageIndex].title}</h5>
          <p className="info">
            {movies.results[ImageIndex].release_date}
            <span style={{ float: "right" }}>
              <i className="fa-solid fa-star"></i>
              {movies.results[ImageIndex].vote_average}
            </span>
          </p>
          <p className="slide-desc">{movies.results[ImageIndex].overview}</p>
        </Link>
      ) : (
        <Skeleton containerClassName="slider-skeleton"
        height={1000}
        // width={50}
        baseColor="#202020"
        highlightColor="#444"/>
      )}
      <div className="dots">
        {images.map((i, index) => {
          return (
            <span
              onClick={() => setImageIndex(index)}
              className={index === ImageIndex ? "marked" : ""}
            >
              •
            </span>
          );
        })}
      </div>
    </div>
    
    <div className="slider small-screen">
      <img src={images_small[ImageIndex]} />
      <button className="btnn" onClick={nextImage}>
        <i className="fa-solid fa-caret-right"></i>
      </button>
      <button className="btnn" onClick={prevImage}>
        <i className="fa-solid fa-caret-left"></i>
      </button>
      {movies ? (
        <Link
          to={"/movie/" + movies.results[ImageIndex].id}
          className="movie-details"
        >
          <h5>{movies.results[ImageIndex].title}</h5>
          <p className="info">
            {movies.results[ImageIndex].release_date}
            <span style={{ float: "right" }}>
              <i className="fa-solid fa-star"></i>
              {movies.results[ImageIndex].vote_average}
            </span>
          </p>
          <p className="slide-desc">{movies.results[ImageIndex].overview}</p>
        </Link>
      ) : (
        <Skeleton containerClassName="slider-skeleton"
        height={1000}
        baseColor="#202020"
        highlightColor="#444"/>
      )}
      <div className="dots">
        {images.map((i, index) => {
          return (
            <span
              onClick={() => setImageIndex(index)}
              className={index === ImageIndex ? "marked" : ""}
            >
              •
            </span>
          );
        })}
      </div>
    </div></>
  );
}
