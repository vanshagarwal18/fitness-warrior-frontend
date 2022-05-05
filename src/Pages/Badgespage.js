import React, { useContext } from "react";
import HeaderLoggedIn from "../Components/HeaderLoggedIn";
import HeaderLoggedOut from "../Components/HeaderLoggedOut";
import BadgesPage from "../Components/Badges";
import StateContext from "../Context/StateContext";
function Badges() {
  const appState = useContext(StateContext);
  return (
    <>
      {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <BadgesPage />
    </>
  );
}

export default Badges;
