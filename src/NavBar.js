import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const url = useLocation();
  console.log("url" + JSON.stringify(url));
  return (
    <nav className="navbar nav-head navbar-expand-md navbar-light">
      <div className="navbar-brand w-25" href="#">
        <Link to="/">
          <img className="logo" src="./black-logo.png" alt="logo" />
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse justify-content-center navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item p-3">
            <a className="nav-link" href="">
              Blog
            </a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link" href="">
              Community
            </a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link" href="">
              Programming
            </a>
          </li>
        </ul>
      </div>
      <div
        className="collapse navbar-collapse site-nav-right"
        id="navbarSupportedContent"
      >
        <Link to="/login" className="sign-in">
          {url.pathname !== "/login" && "Sign in"}
        </Link>
        <a href="" title="Join" className="button button-red">
          Join Marooned
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
