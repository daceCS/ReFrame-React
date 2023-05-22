import "../css/signup&signin.css";
import { useState } from "react";
import Axios from "axios";


function Login() {
  return (
    <div className="inputContainer">
      <div className="inputScreen">
        <div className="inputScreen__content">
          <div className="inputsDiv">
            <div className="input__field">
              <i className="input__icon fas fa-user"></i>
              <input
                type="text"
                className="usernameAndpasswordInput"
                id="username"
                placeholder="Enter Username"
                onkeypress="return event.charCode != 32"
                maxlength="14"
              />
            </div>
            <div className="input__field">
              <i className="input__icon fas fa-lock"></i>
              <input
                type="password"
                className="usernameAndpasswordInput"
                id="password"
                placeholder="Enter Password"
                onkeypress="return event.charCode != 32"
              />
            </div>
            <button
              className="login-button"
              role="button"
              id="login-button"
              onclick="login()"
            >
              Login
            </button>
            <br />
            <br />
            <a href="/signup" id="signup-link">
              Don't have an account? Sign Up
            </a>
          </div>
        </div>

        <div className="inputScreen__background">
          <span className="inputScreen__background__shape inputScreen__background__shape4"></span>
          <span className="inputScreen__background__shape inputScreen__background__shape3"></span>
          <span className="inputScreen__background__shape inputScreen__background__shape2"></span>
          <span className="inputScreen__background__shape inputScreen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
