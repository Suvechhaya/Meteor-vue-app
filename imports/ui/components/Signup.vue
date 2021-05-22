<template>
  <div class="signup-form">
    <form @submit.prevent="registerUser">
      <div class="close-btn mb-4">
        <button @click="home" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="class form-header text-center">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
      </div>
      <hr />
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <span class="fa fa-envelope"></span>
            </span>
          </div>
          <input
            type="email"
            class="form-control"
            name="email"
            placeholder="Email"
            required="required"
            v-model="email"
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
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
            required="required"
            v-model="password"
          />
        </div>
        <div v-if="!checkPasswordLength()" class="error-msg p-1">
          <span>Password must be at least 8 characters!</span>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-lock"></i>
              <i class="fa fa-check"></i>
            </span>
          </div>
          <input
            type="password"
            class="form-control"
            name="confirm_password"
            placeholder="Confirm Password"
            required="required"
            v-model="repassword"
          />
        </div>
        <div v-if="!confirmPassword()" class="error-msg p-1">
          <span>Password mismatched!</span>
        </div>
      </div>
      <div class="sign-up-button d-flex justify-content-center">
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </div>
    </form>
    <div class="text-center">
      Already have an account?
      <router-link to="/login"><a>Login here</a></router-link>
    </div>
  </div>
</template>

<script>
import { Accounts } from "meteor/accounts-base";

export default {
  name: "Signup",
  data() {
    return { email: "", password: "", repassword: "" };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    checkPasswordLength() {
      if (this.password && this.password.length < 8) {
        return false;
      }
      return true;
    },
    confirmPassword() {
      if (this.repassword && this.password !== this.repassword) {
        return false;
      }
      return true;
    },
    isValid() {
      if (this.checkPasswordLength() && this.confirmPassword()) {
        return true;
      }
      return false;
    },
    registerUser() {
      const doc = { email: this.email, password: this.password };
      if (this.isValid()) {
        Accounts.createUser(doc, (err) => {
          if (!err) {
            alert("Sign up successful");
            this.$router.push("/login");
          } else alert("Sign up unsuccessful");
        });
      }
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
.signup-form {
  height: 100vh;
  width: 400px;
  margin: 0 auto;
  padding: 60px 0;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.signup-form h2 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.signup-form hr {
  margin: 0 -30px 20px;
}
.signup-form .form-group {
  margin-bottom: 20px;
}
.signup-form .btn,
.signup-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: var(--blue-md) !important;
  border: none;
  min-width: 140px;
}
.signup-form .btn:hover,
.signup-form .btn:focus {
  background: var(--blue-d) !important;
}
.signup-form a {
  color: var(--blue);
  text-decoration: underline;
}
.signup-form a:hover {
  text-decoration: none;
}
.signup-form .fa {
  font-size: 23px;
}
.signup-form .fa-user {
  font-size: 21px;
}
.signup-form .fa-envelope {
  font-size: 16px;
}
.signup-form .fa-check {
  color: #fff;
  left: 17px;
  top: 18px;
  font-size: 7px;
  position: absolute;
}
.signup-form .error-msg span {
  color: red;
  float: left;
  font-size: 12px;
  padding-left: 15%;
}
</style>