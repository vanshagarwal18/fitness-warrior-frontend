import React from "react";
import { Link } from "react-router-dom";

function HomeLoggedOut() {
  return (
    <>
      <div className="landing-main">
        <div className="row m-0">
          <div className="col-12 col-lg-7 col-md-7 col-sm-12">
            <h1 className="text">Aren't you able to exercise regularly?</h1>
            <h5 className="appintro">
              Our app keeps the record of your exercise streaks and will
              motivate you to exercise and will turn{" "}
              <strong>your one step to your lifelong habit.</strong>{" "}
            </h5>
            <h2 className="textsmall">What are you waiting for?</h2>
            <Link to="/register">
              <button className="btnlogout">Register Now</button>
            </Link>
          </div>
          <div className="col-12 col-lg-5 col-md-5 col-sm-12 ">
            <img
              className="img-fluid imgex"
              src="/images/landingPageImage.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLoggedOut;
