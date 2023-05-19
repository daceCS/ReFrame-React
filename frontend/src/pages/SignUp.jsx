import "../css/signup.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async (username, password) => {
    const account = await fetch("http://localhost/4000//api/accounts/create", {
      username: username,
      password: password,
    });

    console.log(account);
  };

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
                maxlength="14"
                onInput={setUsername(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                id="password"
                placeholder="Enter Password"
                onInput={setPassword(e.target.value)}
              />
            </div>
            <button
              className="create-account-button"
              role="button"
              id="create-account-button"
              onclick={createAccount}
            >
              Create account
            </button>
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

export default SignUp;
