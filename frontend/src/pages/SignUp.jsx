import "../css/signup&signin.css";
import { useState } from "react";
import Axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async () => {
    Axios.post("http://localhost:4000/api/accounts/create", {
      username,
      password,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <body className =  "signupAndSigninBackground">
    <div className="signindiv">
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
                maxLength="14"
                onInput={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="input__field">
              <i className="input__icon fas fa-lock"></i>
              <input
                type="password"
                className="usernameAndpasswordInput"
                id="password"
                placeholder="Enter Password"
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              className="create-account-button"
              role="button"
              id="create-account-button"
              onClick={createAccount}
            >
              Create account
            </button>
            <br />
            <br />
            <a href="/login" id="signin-link">
              Have an account? Sign In
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
    </div>
    </body>
  );
}

export default SignUp;
