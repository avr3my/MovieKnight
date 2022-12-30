import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Search from "../search/Search";

const Nav = () => {
  const [bar, setBar] = useState(false);

  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png";
  
  return (
    <div className={`outer ${bar ? "active" : ""}`}>
      <nav>
        <ul className="">
          <li className={`logo-link `}>
            <Link to="/">
              <img className="logo" src={logo} />
            </Link>
          </li>
          <li className="links">
            <Link to="/top-rated">Top rated</Link>{" "}
          </li>
          <li className="links">
            <Link to="/upcoming-movies">Upcoming movies</Link>
          </li>
          <li className="links">
            <Link to="/popular">Popular</Link>
          </li>
          <li className="links Search-box">
            <Search />
          </li>
          <li className="bar" onClick={() => setBar(!bar)}>
            <i class="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
