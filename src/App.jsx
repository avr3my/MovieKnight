// import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import MoviePage from "./components/moviepage/MoviePage";
import MovieGroup from "./components/moviegroup/MovieGroup";
import Error from "./components/Error";


export default function App() {
  return (
    <div style={{ backgrounColor: "black" }}>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/top-rated" element={<MovieGroup category={"Top rated"} />} />
        <Route exact path="/upcoming-movies" element={<MovieGroup category={"Upcoming movies"} />} />
        <Route exact path="/popular"element={<MovieGroup category={"Popular"} />} />
        <Route exact path="/genre/:id" element={<MovieGroup category={""} />} />
        <Route exact path="/movie/:id" element={<MoviePage />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}
