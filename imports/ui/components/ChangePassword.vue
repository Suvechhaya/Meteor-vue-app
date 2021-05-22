<template>
  <div class="change-password-form">
    <form @submit.prevent="changeUserPassword">
      <div class="close-btn mb-4">
        <button @click="userAccount" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="class form-header text-center">
        <h2>Change Password</h2>
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
            name="oldPassword"
            placeholder="Old Password"
            required="required"
            v-model="oldPassword"
          />
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
            name="newPassword"
            placeholder="New Password"
            required="required"
            v-model="newPassword"
          />
        </div>
      </div>
      <div v-if="!checkPasswordLength()" class="error-msg p-1">
        <span>Password must be at least 8 characters!</span>
      </div>
      <div class="change-password-button d-flex justify-content-center">
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-lg">Change</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Accounts } from "meteor/accounts-base";

export default {
  name: "ChangePassword",
  data() {
    return { oldPassword: "", newPassword: "" };
  },
  methods: {
    userAccount() {
      this.$router.push("/userAccount");
    },
    checkPasswordLength() {
      if (this.newPassword && this.newPassword.length < 8) {
        return false;
      }
      return true;
    },
    changeUserPassword() {
      if (this.checkPasswordLength()) {
        Accounts.changePassword(this.oldPassword, this.newPassword, (err) => {
          if (err) {
            alert("Old password is incorrect!");
          } else {
            this.$router.push("userAccount");
          }
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
.change-password-form {
  height: 100vh;
  width: 400px;
  margin: 0 auto;
  padding: 60px 0;
}
.change-password-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.change-password-form h2 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.change-password-form hr {
  margin: 0 -30px 20px;
}
.change-password-form .form-group {
  margin-bottom: 20px;
}
.change-password-form .btn,
.change-password-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: var(--blue-md) !important;
  border: none;
  min-width: 140px;
}
.change-password-form .btn:hover,
.change-password-form .btn:focus {
  background: var(--blue-d) !important;
}
.change-password-form a:hover {
  text-decoration: none;
}
.change-password-form .fa {
  font-size: 23px;
}

.change-password-form .fa-check {
  color: #fff;
  left: 17px;
  top: 18px;
  font-size: 7px;
  position: absolute;
}
.change-password-form .error-msg span {
  color: red;
  float: left;
  font-size: 12px;
  padding-left: 15%;
}
</style>