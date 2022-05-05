import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DispatchContext from "../Context/DispatchContext";
function HeaderLoggedIn() {
  let navigate = useNavigate();
  const appDispatch = useContext(DispatchContext);
  function handlelogout() {
    appDispatch({ type: "logout" });
    navigate("/");
    appDispatch({
      type: "flashMessage",
      value: "You have logged out Successfully.",
    });
  }
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
              <Link className="nav-link linkitem" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item listitem">
              <Link className="nav-link linkitem" to="/badges">
                Badges
              </Link>
            </li>
            <li className="nav-item listitem">
              <button
                onClick={handlelogout}
                type="button"
                className="btn btn-success btn-lg"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default HeaderLoggedIn;
