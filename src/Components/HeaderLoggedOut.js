import React from "react";
import { Link } from "react-router-dom";
function HeaderLoggedOut() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-inner">
        <Link className="navbar-brand brandname" to="/">
          <img
            src="/images/Screenshot (1678).png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt=""
          />
          Fitness Warrior
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse list" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item listitem">
              <Link to="/register">
                {" "}
                <button type="button" className="btn btn-success btn-lg">
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="nav-item listitem">
              <Link to="/login">
                {" "}
                <button type="button" className="btn btn-success btn-lg">
                  Log In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default HeaderLoggedOut;
