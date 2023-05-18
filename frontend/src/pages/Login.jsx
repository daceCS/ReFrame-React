

function Login() {
  return <div class="container">
  <div class="screen">
      <div class="screen__content">
          <div class="login">
              <div class="login__field">
                  <i class="login__icon fas fa-user"></i>
                  <input type="text" class="login__input" id="username" placeholder="Enter Username" onkeypress="return event.charCode != 32" maxlength="14"/>
              </div>
              <div class="login__field">
                  <i class="login__icon fas fa-lock"></i>
                  <input type="password" class="login__input" id="password" placeholder="Enter Password" onkeypress="return event.charCode != 32"/>
              </div>
              <button class="create-account-button" role="button" id="create-account-button" onclick="login()">Login</button>
              <br/>
              <br/>
              <a href="/create-account" id="signup-link">Dont have an account? Sign Up</a>
          </div>
      </div>

      <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
      </div>
  </div>
</div>;
}

export default Login;
