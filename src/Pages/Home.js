import React, { useContext } from "react";
import HeaderLoggedIn from "../Components/HeaderLoggedIn";
import HeaderLoggedOut from "../Components/HeaderLoggedOut";
import HomeLoggedIn from "../Components/HomeLoggedIn";
import HomeLoggedOut from "../Components/HomeLoggedOut";
import StateContext from "../Context/StateContext";

function Home() {
  const appState = useContext(StateContext);
  return (
    <>
      {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      {appState.loggedIn ? <HomeLoggedIn /> : <HomeLoggedOut />}
    </>
  );
}

export default Home;
