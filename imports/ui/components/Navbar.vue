<template>
  <div>
    <nav class="navbar navbar-expand-lg tbg-light fixed-top">
      <a class="navbar-brand text-white logo-name" href="#"><h4>Breathe</h4></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span role="button"
          ><i class="fa fa-bars" aria-hidden="true" style="color: #e6e6ff"></i
        ></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar ml-auto">
          <ul class="navbar-nav">
            <li class="nav-item active pr-4">
              <router-link to="/">
                <a class="nav-link text-white"
                  >HOME <span class="sr-only">(current)</span></a
                >
              </router-link>
            </li>
            <li class="nav-item pr-4">
              <router-link to="/about">
                <a class="nav-link text-white">ABOUT</a>
              </router-link>
            </li>
            <li class="nav-item pr-4">
              <router-link to="/login">
                <a class="nav-link text-white">LOGIN</a>
              </router-link>
            </li>
            <li>
              <button
                @click="signUp"
                class="btn btn-outline-light text-white my-2 my-sm-0"
              >
                SIGN UP
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    signUp() {
      // this.$router.push('/signup').catch(()=>{});
      this.$router.push("/signup").catch((err) => {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (
          err.name !== "NavigationDuplicated" &&
          !err.message.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          // But print any other errors to the console
          logError(err);
        }
      });
    },
  },
};
</script>

<style scoped>
.logo-name {
  font-family: "Satisfy", cursive;
}
.tbg-light {
  background-color: var(--blue-trans);
}
.btn-outline-light:hover {
  background: var(--blue);
  border: none;
}
.navbar-nav a:hover {
  color: var(--blue) !important;
}
.toggle-button {
  background: var(--blue);
}
.navbar-toggler {
  width: 47px;
  height: 34px;
  background-color: var(--blue-trans);
}
</style>