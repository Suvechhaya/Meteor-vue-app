<template>
  <div class="forgot-password-form">
    <form @submit.prevent="sendResetEmail">
      <div class="close-btn mb-4">
        <button @click="login" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="class form-header text-center">
        <h3>Reset Password</h3>
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
            type="text"
            class="form-control"
            name="email"
            placeholder="Email"
            required="required"
            v-model="email"
          />
        </div>
      </div>
      <div class="sign-up-button d-flex justify-content-center">
        <div class="form-group">
          <button
            @click="sendEmail"
            type="submit"
            class="btn btn-primary btn-lg"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  name: "ForgotPassword",
  data() {
    return { email: "" };
  },

  methods: {
    login() {
      this.$router.push("/login");
    },
    async sendEmail() {
      console.log('send email method is called')
      try {
        if (!this.email) return;
        await Meteor.call('Accounts.sendResetEmail', this.email);
      } catch (e) {
        this.$error(e);
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
.forgot-password-form {
  height: 100vh;
  width: 360px;
  margin: 0 auto;
  padding: 90px 0;
}
.forgot-password-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.forgot-password-form h3 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.forgot-password-form hr {
  margin: 0 -30px 20px;
}
.forgot-password-form .form-group {
  margin-bottom: 20px;
}
.forgot-password-form .bottom-action {
  font-size: 14px;
}
.forgot-password-form .btn,
.forgot-password-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: var(--blue-md) !important;
  border: none;
  min-width: 132px;
}
.forgot-password-form .btn:hover,
.forgot-password-form .btn:focus {
  background: var(--blue-d) !important;
}

.forgot-password-form .fa-envelope {
  font-size: 16px;
}
</style>