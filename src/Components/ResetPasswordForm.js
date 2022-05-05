import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import StateContext from "../Context/StateContext";
import DispatchContext from "../Context/DispatchContext";
function ResetPasswordForm() {
  let navigate = useNavigate();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [resettoken, setResettoken] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.patch("/user/resetPassword", {
        resettoken,
        password,
        passwordConfirm,
      });
      if (response.data.status.localeCompare("success") === 0) {
        appDispatch({ type: "login", data: response.data.user });
        appDispatch({
          type: "flashMessage",
          value: "You have successfully changed your password and  logged in.",
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
            <h2>Reset Password</h2>
            <span className="logintext">
              Enter the reset password token and the new password.
            </span>
            <hr />
            <form onSubmit={handleSubmit} className="login-form" action="">
              <div>
                <label htmlFor="resettoken" className="form__label">
                  Reset Password Token{" "}
                </label>
                <br />
                <input
                  id="resettoken"
                  onChange={(e) => {
                    setResettoken(e.target.value);
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
                  type="password"
                  className="form__input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  required
                  minLength="8"
                />
              </div>
              <div>
                <label htmlFor="passwordConfirm" className="form__label">
                  Confirm Password{" "}
                </label>
                <br />
                <input
                  type="password"
                  className="form__input"
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                  }}
                  id="passwordConfirm"
                  required
                  minLength="8"
                />
              </div>

              <br />

              <div className="btndiv">
                <button className="btnlog">Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordForm;
