<template>
  <div class="reset-password-form">
    <form @submit.prevent="resetUserPassword()">
      <div class="close-btn mb-4">
        <button @click="home" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="class form-header text-center">
        <h2>Reset Password</h2>
      </div>
      <hr />
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
            placeholder="New Password"
            required="required"
            v-model="newPassword"
          />
        </div>
        <div v-if="!checkPasswordLength()" class="error-msg p-1">
          <span>Password must be at least 8 characters!</span>
        </div>
      </div>
      <div class="reset-password-button d-flex justify-content-center">
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-lg">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Accounts } from "meteor/accounts-base";

export default {
  name: "ResetPassword",
  data() {
    return { newPassword: "" };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    checkPasswordLength() {
      if (this.newPassword && this.newPassword.length < 8) {
        return false;
      }
      return true;
    },
    resetUserPassword() {
      if (this.checkPasswordLength()) {
        Accounts.resetPassword(
          this.$route.params.token,
          this.newPassword,
          (error) => {
            if (error) {
              console.log(error);
            } else {
              console.log("no error");
            }
          }
        );
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
.reset-password-form {
  height: 100vh;
  width: 400px;
  margin: 0 auto;
  padding: 60px 0;
}
.reset-password-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.reset-password-form h2 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.reset-password-form hr {
  margin: 0 -30px 20px;
}
.reset-password-form .form-group {
  margin-bottom: 20px;
}
.reset-password-form .btn,
.reset-password-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: var(--blue-md) !important;
  border: none;
  min-width: 140px;
}
.reset-password-form .btn:hover,
.reset-password-form .btn:focus {
  background: var(--blue-d) !important;
}
.reset-password-form .fa {
  font-size: 23px;
}
.reset-password-form .error-msg span {
  color: red;
  float: left;
  font-size: 12px;
  padding-left: 15%;
}
</style>