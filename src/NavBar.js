import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar nav-head navbar-expand-md navbar-light">
        <div className="navbar-brand w-25" href="#">
          <a href="#">
            <img className="logo" src="./black-logo.png" alt="logo" />
          </a>
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
          <a href="" title="Join" className="sign-in">
            Sign in
          </a>
          <a href="" title="Join" className="button button-red">
            Join Marooned
          </a>
        </div>
      </nav>
      <div className="black">
        <img src="./white-logo.png" alt="logo" />
        <h2 className="logo-title">
          The world's most energizing community for developers
        </h2>
      </div>
    </div>
  );
}

export default NavBar;
