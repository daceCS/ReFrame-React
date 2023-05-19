function Login() {
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                id="username"
                placeholder="Enter Username"
                onkeypress="return event.charCode != 32"
                maxlength="14"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                id="password"
                placeholder="Enter Password"
                onkeypress="return event.charCode != 32"
              />
            </div>
            <button
              className="create-account-button"
              role="button"
              id="create-account-button"
              onclick="login()"
            >
              Login
            </button>
            <br />
            <br />
            <a href="/create-account" id="signup-link">
              Dont have an account? Sign Up
            </a>
          </div>
        </div>

        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
