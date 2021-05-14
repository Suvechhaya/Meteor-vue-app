<template>
  <div class= "container col" style="height:100%">
      <div class="row">
        <div class="home-content h-100 col-xs-12 col-sm-12 col-md-12 full-height" :style="image">
          <h3>Slow down, just breathe.</h3>
          <h5>
            We are here to help you break the tension during your work hours.
          </h5>
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
p {
  font-family: serif;
}
header {
  font-family: serif;
}
</style>