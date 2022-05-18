import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DispatchContext from "../Context/DispatchContext";
import StateContext from "../Context/StateContext";
function RegisterForm() {
  let navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/user/signup", {
        username,
        email,
        password,
        passwordConfirm,
      });
      if (response.data.status.localeCompare("success") === 0) {
        appDispatch({ type: "login", data: response.data.user });
        appDispatch({
          type: "flashMessage",
          value: "You have logged in successfully",
        });
        navigate("/");
      } else if (response.data.status.localeCompare("error") === 0) {
        appDispatch({
          type: "flashMessage",
          value: response.data.message,
        });
      }
    } catch (err) {
      console.log("There is problem in login", err);
    }
  }
  useEffect(() => {
    if (appState.loggedIn) navigate(`/`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      <div className="row m-0">
        <div className="col-6 col-lg-6 col-md-6 col-sm-6 loginimage">
          <Link to="/">
            <img className="logo" src="/images/logo.png" alt="Logo" />
          </Link>
          <img className="leftimage" src="/images/loginimage.png" alt="" />
        </div>
        <div className="col-6 col-lg-6 col-md-6 col-sm-6 loginarea">
          <div className="loginlayout">
            <h2>Get's Started</h2>
            <span className="logintext">Already have an account?</span>
            <Link to="/login" className="logintext2">
              Log in
            </Link>
            <hr />
            <form onSubmit={handleSubmit} className="login-form" action="">
              <div>
                <label htmlFor="username" className="form__label">
                  {" "}
                  Username{" "}
                </label>
                <br />
                <input
                  name="username"
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                  className="form__input"
                />
              </div>
              <div>
                <label htmlFor="email" className="form__label">
                  {" "}
                  Email address{" "}
                </label>
                <br />
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  className="form__input"
                />
              </div>
              <div>
                <label htmlFor="password" className="form__label">
                  {" "}
                  Password{" "}
                </label>
                <br />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form__input"
                  id="password"
                  required
                  minLength="8"
                />
              </div>
              <div>
                <label htmlFor="password" className="form__label">
                  Confirm Password{" "}
                </label>
                <br />
                <input
                  name="passwordConfirm"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                  }}
                  className="form__input"
                  id="passwordConfirm"
                  required
                  minLength="8"
                />
              </div>
              <br />
              <div className="btndiv">
                <button className="btnlog">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
