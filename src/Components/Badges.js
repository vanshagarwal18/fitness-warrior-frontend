import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import StateContext from "../Context/StateContext";

function Badges() {
  let navigate = useNavigate();
  const appState = useContext(StateContext);
  const [maxStreak, setMaxStreak] = useState();
  const [currentStreak, setCurrentStreak] = useState();
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.post("/badges/nodefault", {
        token: appState.user.token,
      });
      setMaxStreak(response.data.badge.maxdayStreak);
      setCurrentStreak(response.data.badge.currentStreak);
    }
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [new Date().getDate()]);
  useEffect(() => {
    if (!appState.loggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.post("/badges", {
        token: appState.user.token,
      });
      setMaxStreak(response.data.maxStreak);
      setCurrentStreak(response.data.currentStreak);
    }
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="badges">
        <div className="record">
          <h2>{appState.user.username}</h2>
        </div>
        <div className="row m-0">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 mt-2">
            <div className="record">
              <h3>Current Streak:{currentStreak} days</h3>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 mt-2">
            <div className="record">
              <h3>Max Streak: {maxStreak} days</h3>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 mt-2">
            <div className="course">
              <div className="course-preview">
                <div>Badge 1</div>
                <img
                  className="mybadge"
                  src="/images/oneDayChamp.png"
                  alt="OneDayChamp"
                />
              </div>
              {maxStreak >= 1 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogressone"></div>
                    <span className="progress-text"> 1/10 Challenges </span>
                  </div>
                  <h1>You are 1 day Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 1 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
            <div className="course">
              <div className="course-preview">
                <div>Badge 2</div>
                <img
                  className="mybadge"
                  src="/images/sevenDaysChamp.png"
                  alt="SevenDaysChamp"
                />
              </div>
              {maxStreak >= 7 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogresstwo"></div>
                    <span className="progress-text"> 2/10 Challenges </span>
                  </div>
                  <h1>You are 7 days Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 7 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
            <div className="course">
              <div className="course-preview">
                <div>Badge 3</div>
                <img
                  className="mybadge"
                  src="/images/FifteenDaysChamp.png"
                  alt="FifteenDaysChamp"
                />
              </div>
              {maxStreak >= 15 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogressthree"></div>
                    <span className="progress-text"> 3/10 Challenges </span>
                  </div>
                  <h1>You are 15 days Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 15 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
            <div className="course">
              <div className="course-preview">
                <div>Badge 4</div>
                <img
                  className="mybadge"
                  src="/images/twentyDaysChamp.png"
                  alt="TwentyDaysChamp"
                />
              </div>
              {maxStreak >= 20 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogressfour"></div>
                    <span className="progress-text"> 4/10 Challenges </span>
                  </div>
                  <h1>You are 20 days Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 20 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
            <div className="course">
              <div className="course-preview">
                <div>Badge 5</div>
                <img
                  className="mybadge"
                  src="/images/oneMonthChamp.png"
                  alt="OneMonthChamp"
                />
              </div>
              {maxStreak >= 30 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogressfive"></div>
                    <span className="progress-text"> 5/10 Challenges </span>
                  </div>
                  <h1>You are 1 Month Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 30 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 mt-2">
            <div className="course">
              <div className="course-preview">
                <div>Badge 6</div>
                <img
                  className="mybadge"
                  src="/images/twoMonthsChamp.png"
                  alt="TwoMonthsChamp"
                />
              </div>
              {maxStreak >= 60 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogresssix"></div>
                    <span className="progress-text"> 6/10 Challenges </span>
                  </div>
                  <h1>You are 2 Months Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 60 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
            <div className="course">
              <div className="course-preview">
                <div>Badge 7</div>
                <img
                  className="mybadge"
                  src="/images/threeMonthsChamp.png"
                  alt="ThreeMonthsChamp"
                />
              </div>
              {maxStreak >= 90 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogressseven"></div>
                    <span className="progress-text"> 7/10 Challenges </span>
                  </div>
                  <h1>You are 3 Months Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 90 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
            <div className="course">
              <div className="course-preview">
                <div>Badge 8</div>
                <img
                  className="mybadge"
                  src="/images/FourMonthsChamp.png"
                  alt="FourMonthsChamp"
                />
              </div>
              {maxStreak >= 120 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogresseight"></div>
                    <span className="progress-text"> 8/10 Challenges </span>
                  </div>
                  <h1>You are 4 Months Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 120 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
            <div className="course">
              <div className="course-preview">
                <div>Badge 9</div>
                <img
                  className="mybadge"
                  src="/images/FiveMonthsChamp.png"
                  alt="FiveMonthsChamp"
                />
              </div>
              {maxStreak >= 150 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogressnine"></div>
                    <span className="progress-text"> 9/10 Challenges </span>
                  </div>
                  <h1>You are 5 Months Champion.</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 150 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
            <div className="course">
              <div className="course-preview">
                <div>Badge 10</div>
                <img
                  className="mybadge"
                  src="/images/FitnessWarrior.png"
                  alt="FitnessWarrior"
                />
              </div>
              {maxStreak >= 180 && (
                <div className="course-info earned-badge">
                  <div className="progress-container">
                    <div className="progress indprogressten"></div>
                    <span className="progress-text"> 10/10 Challenges </span>
                  </div>
                  <h1>You are Fitness Warrior</h1>
                  <button className="btnbadge">Congrates &#128516;</button>
                </div>
              )}
              {maxStreak < 180 && (
                <div className="course-info">
                  <span className="fa-solid fa-lock iconbadge"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Badges;
