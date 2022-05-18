import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import StateContext from "../Context/StateContext";
import DispatchContext from "../Context/DispatchContext";
function HomeLoggedIn() {
  const [days, setTheDays] = useState("--");
  const [hours, setTheHours] = useState("--");
  const [minutes, setTheMinutes] = useState("--");
  const [seconds, setTheSeconds] = useState("--");

  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  async function handleYes() {
    const response = await axios.post("/badges/yes", {
      token: appState.user.token,
    });
    if (response.data.status.localeCompare("success") === 0) {
      setTheDays(
        response.data.badge.nextMilestone - response.data.badge.currentStreak
      );
      appDispatch({
        type: "flashMessage",
        value: "Well Done!!!.Keep it up.",
      });
    } else if (response.data.status.localeCompare("error") === 0) {
      appDispatch({
        type: "flashMessage",
        value: response.data.message,
      });
    }
  }
  async function handleNo() {
    const response = await axios.post("/badges/no", {
      token: appState.user.token,
    });
    if (response.data.status.localeCompare("success") === 0) {
      setTheDays(
        response.data.badge.nextMilestone - response.data.badge.currentStreak
      );
      appDispatch({
        type: "flashMessage",
        value:
          "You have not performed exercise today.Try to maintain your streak.",
      });
    } else if (response.data.status.localeCompare("error") === 0) {
      appDispatch({
        type: "flashMessage",
        value: response.data.message,
      });
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTheHours(23 - new Date().getHours());
      setTheMinutes(59 - new Date().getMinutes());
      setTheSeconds(60 - new Date().getSeconds());
    }, 1000);
    async function fetchdata() {
      const response = await axios.post("/badges", {
        token: appState.user.token,
      });
      console.log(response.data);
      setTheDays(response.data.nextMilestone - response.data.currentStreak);
    }
    fetchdata();
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="landing-main">
        <div className="row m-0">
          <div className="col-12 col-lg-7 col-md-7 col-sm-12 ">
            <h1 className="text">Have you performed exercise today?</h1>
            <h3 className="textsmall">Time left to unlock next badge....</h3>
            <div className="time">
              <div className="days">
                {days}
                <br />
                <div className="time-text">Days</div>
              </div>
              <div className="timer">
                {hours}
                <br />
                <div className="time-text">Hours</div>
              </div>
              <div className="timer">
                {minutes} <br />
                <div className="time-text">Minutes</div>
              </div>
              <div className="timer">
                {seconds} <br />
                <div className="time-text">Seconds</div>
              </div>
            </div>
            <div className="buttons">
              <button className="btncreate" onClick={handleYes}>
                YES
              </button>

              <button className="btncreate" onClick={handleNo}>
                NO
              </button>
            </div>
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

export default HomeLoggedIn;
