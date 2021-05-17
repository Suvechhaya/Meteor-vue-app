<template>
  <div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
      <div class="close-btn mb-4">
        <button @click="home" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="class form-header text-center">
        <h3>Login</h3>
      </div>
      <hr />
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <span class="fa fa-user"></span>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Username"
            required="required"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-lock"></i>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
      </div>
      <div class="form-group bottom-action">
        <label class="form-check-label mr-4">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#" class="forgot-link ml-5">Forgot Password?</a>
      </div>
      <div class="sign-up-button d-flex justify-content-center">
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </div>
      </div>
    </form>
    <div class="text-center">
      Don't have an account?
      <router-link to="/signup"><a>Sign up</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.form-control {
  font-size: 15px;
}
.form-control,
.form-control:focus,
.input-group-text {
  border-color: #e1e1e1;
}
.form-control,
.btn {
  border-radius: 3px;
}
.login-form {
  height: 100vh;
  width: 360px;
  margin: 0 auto;
  padding: 90px 0;
}
.login-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h3 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.login-form hr {
  margin: 0 -30px 20px;
}
.login-form .form-group {
  margin-bottom: 20px;
}
.login-form .bottom-action {
  font-size: 14px;
}
.login-form .btn,
.login-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: var(--blue-md) !important;
  border: none;
  min-width: 132px;
}
.login-form .btn:hover,
.login-form .btn:focus {
  background: var(--blue-d) !important;
}
.login-form a {
  color: var(--blue);
  text-decoration: underline;
}
.login-form a:hover {
  text-decoration: none;
}
.login-form .fa {
  font-size: 23px;
}
.login-form .fa-user {
  font-size: 21px;
}
.login-form .fa-envelope {
  font-size: 16px;
}
.login-form .fa-check {
  color: #fff;
  left: 17px;
  top: 18px;
  font-size: 7px;
  position: absolute;
}
</style>