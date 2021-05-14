<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Breathe</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar ml-auto">
          <ul class="navbar-nav">
            <li class="nav-item active pr-4">
              <a class="nav-link" href="#"
                >HOME <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item pr-4">
              <a class="nav-link" href="#">ABOUT</a>
            </li>
            <li class="nav-item pr-4">
              <a class="nav-link" href="#">LOGIN</a>
            </li>
            <li>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
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
};
</script>

<style scoped>
p {
  font-family: serif;
}
header {
  font-family: serif;
}
</style>