<template v-if="currentUser">
  <div class="container-fluid m-0 p-0">
    <div class="top-bar">
      <navbar />
    </div>
    <div
      class="user-account-content d-flex justify-content-center align-items-center"
      id="user-account"
      :style="image"
    >
      <div class="image-background w-50 mt-5 p-4">
        <div class="user-account-content-image text-center">
          <img class="img-fluid"
            src="https://images.squarespace-cdn.com/content/v1/58881bfce6f2e17bbff5307e/1546076336278-VCRWOP23W0HN844VP4YJ/ke17ZwdGBToddI8pDm48kKV3XCZad08Ua6-KF0IOJepZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzaMa4TMW2NI033QGOfP_Iwz7UKBIgmAeRsX4lIsdmVIWZYAYXjbT5Hf2Lh7FadJVQ/image-asset.gif?format=500w"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="footer-content">
      <footer-section />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

export default {
  name: "UserAccount",
  components: {
    Navbar,
    FooterSection,
  },
  methods: {
    currentUser() {
      return Meteor.user();
    },
  },
  data() {
    return {
      image: {
        backgroundImage:
          "url(https://i.pinimg.com/originals/ec/e1/21/ece121de04b1ac38117c2aea1c9b51d0.jpg)",
      },
    };
  },
};
</script>

<style scoped>
.user-account-content {
  height: 100vh;
  overflow-x: hidden;
}
.image-background {
  background-color: var(--blue-trans);
}
img {
  height: 400px;
}
</style>