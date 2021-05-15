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
              <a class="nav-link text-white" href="#"
                >HOME <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item pr-4">
              <a class="nav-link text-white" href="#">ABOUT</a>
            </li>
            <li class="nav-item pr-4">
              <a class="nav-link text-white" href="#">LOGIN</a>
            </li>
            <li>
              <button class="btn btn-outline-light text-white my-2 my-sm-0">
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
};
</script>

<style scoped>
.logo-name {
  font-family: "Satisfy", cursive;
}
p {
  font-family: serif;
}
header {
  font-family: serif;
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