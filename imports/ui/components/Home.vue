<template>
  <div class="container-fluid m-0 p-0">
    <div
      class="home-content d-flex justify-content-center align-items-center"
      :style="image"
    >
      <div class="text-background w-50 mt-5 p-4">
        <div class="home-content-text text-white text-center">
          <h3>Slow down, just breathe.</h3>
          <h5>
            We are here to help you break the tension during your work hours.
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Home",
      image: {
        backgroundImage:
          "url(https://www.10wallpaper.com/wallpaper/1366x768/1811/Austria_Plansee_Lake_HD_Nature_Scenery_Photo_1366x768.jpg)",
      },
    };
  },
};
</script>

<style scoped>
.home-content {
  height: 100vh;
  overflow-x: hidden;
}
.text-background {
  background-color: var(--blue-trans);
}
</style>