import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import StateContext from "../Context/StateContext";
import DispatchContext from "../Context/DispatchContext";
function ForgotPasswordForm() {
  let navigate = useNavigate();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [email, setEmail] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/user/forgetPassword", {
        email,
      });
      if (response.data.status.localeCompare("success") === 0) {
        appDispatch({
          type: "flashMessage",
          value: response.data.message,
        });
        navigate("/resetPassword");
      } else if (response.data.status.localeCompare("error") === 0) {
        appDispatch({
          type: "flashMessage",
          value: response.data.message,
        });
      }
    } catch (err) {
      console.log("There is problem in forget password", err);
    }
  }
  useEffect(() => {
    if (appState.loggedIn) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="row m-0">
        <div className="col-6 col-lg-6 col-md-6 col-sm-6 loginimage">
          <Link to="/">
            <img className="logo" src="/images/logo.png" alt="Logo" />
          </Link>
          <img
            className="leftimage"
            src="/images/loginimage.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="col-6 col-lg-6 col-md-6 col-sm-6 loginarea">
          <div className="loginlayout">
            <h2>Forgot Password</h2>
            <span className="logintext">
              Enter the email to send the reset token.
            </span>
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="form__input"
                />
              </div>

              <br />

              <div className="btndiv">
                <button className="btnlog">Send token</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordForm;
