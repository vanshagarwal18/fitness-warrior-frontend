import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DispatchContext from "../Context/DispatchContext";
import StateContext from "../Context/StateContext";
function LoginForm() {
  let navigate = useNavigate();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", {
        email,
        password,
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
  }, []);
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
            <h2>Login</h2>
            <span className="logintext">Don't have an account?</span>
            <Link to="/register" className="logintext2">
              Register now
            </Link>
            <hr />
            <form onSubmit={handleSubmit} className="login-form" action="">
              <div>
                <label htmlFor="email" className="form__label">
                  {" "}
                  Email address{" "}
                </label>
                <br />
                <input
                  id="email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="you@example.com"
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
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  className="form__input"
                  id="password"
                  required
                  minLength="8"
                />
              </div>
              <br />
              <Link to="/forgotpassword" className="forgottext">
                Forgot Password?
              </Link>
              <div className="btndiv">
                <button className="btnlog">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
