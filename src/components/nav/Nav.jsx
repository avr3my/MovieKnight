import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Search from "../search/Search";
import logo from "../assets/black_logo.jpg";

const Nav = () => {
  const [bar, setBar] = useState(false);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState(false);
  // const logo =
  //   "../assets/black_logo.jpg";

  return (
    <div className={`outer ${bar ? "active" : ""}`}>
      <nav>
        <ul className="">
          <li className={`logo-link `}>
            <Link to="/" onClick={() => setBar(false)}>
              <img className="logo" src={logo} />
            </Link>
            <i
              className={"fa-solid fa-x bar-close"}
              onClick={() => setBar(false)}
            ></i>
          </li>
          <li className="links">
            <Link
              to="/top-rated"
              onClick={() => {
                setBar(false);
                setSearch2(false);
              }}
            >
              Top rated
            </Link>
          </li>
          <li className="links">
            <Link
              to="/upcoming-movies"
              onClick={() => {
                setBar(false);
                setSearch2(false);
              }}
            >
              Upcoming movies
            </Link>
          </li>
          <li className="links">
            <Link
              to="/popular"
              onClick={() => {
                setBar(false);
                setSearch2(false);
              }}
            >
              Popular
            </Link>
          </li>
          <li className="links search-icon">
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => setSearch2(!search2)}
            ></i>
            {search2 && (
              <Search
                setBar={setBar}
                search2={search2}
                search={search}
                setSearch={setSearch}
                setSearch2={setSearch2}
              />
            )}
          </li>
          <li className="links Search-box">
            <Search setBar={setBar} search={search} setSearch={setSearch} />
          </li>
          <li className={"bar"} onClick={() => setBar(true)}>
            <i className="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
