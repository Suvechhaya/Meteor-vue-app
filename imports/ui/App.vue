<template>
  <div id="app">
    <div class="content">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Satisfy&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

/* FONTS */
/* font-family: 'Roboto', sans-serif;
font-family: 'Satisfy', cursive; */
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
}
:root {
  --blue: rgb(11, 57, 84);
  --blue-d: rgb(16, 65, 121);
  --blue-md: rgb(19, 78, 148);
  --blue-trans: rgba(11, 57, 84, 0.4);
  --blue-trans-light: rgba(11, 57, 84, 0.04);
}
</style>
