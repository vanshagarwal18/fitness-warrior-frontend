import "./App.css";
import React, { useEffect } from "react";

import { useImmerReducer } from "use-immer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

//Pages
import Home from "./Pages/Home";
import Badges from "./Pages/Badgespage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import FlashMessages from "./Components/FlashMessages";

//Context
import StateContext from "./Context/StateContext";
import DispatchContext from "./Context/DispatchContext";
axios.defaults.baseURL = "http://localhost:8000/";
function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("fitnessWarriorAppToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("fitnessWarriorAppToken"),
      username: localStorage.getItem("fitnessWarriorAppUsername"),
      email: localStorage.getItem("fitnessWarriorAppEmail"),
    },
  };
  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
      case "flashMessage":
        draft.flashMessages.push(action.value);
        return;
      default:
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("fitnessWarriorAppToken", state.user.token);
      localStorage.setItem("fitnessWarriorAppUsername", state.user.username);
      localStorage.setItem("fitnessWarriorAppEmail", state.user.email);
    } else {
      localStorage.removeItem("fitnessWarriorAppToken");
      localStorage.removeItem("fitnessWarriorAppUsername");
      localStorage.removeItem("fitnessWarriorAppEmail");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loggedIn]);
  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Router>
            <FlashMessages messages={state.flashMessages} />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route
                path="/forgotpassword"
                element={<ForgotPassword />}
              ></Route>
              <Route path="/resetPassword" element={<ResetPassword />}></Route>
              <Route path="/badges" element={<Badges />}></Route>
            </Routes>
          </Router>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  );
}

export default App;
