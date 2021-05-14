<template>
  <div id="app">
    <div class="content">
      <div class="top-bar">
        <navbar />
      </div>
      <div class="page-content">
        <home />
      </div>
      <div class="footer-content">
        <footer-section />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import FooterSection from './components/FooterSection.vue';


export default {
  components: {
    Navbar,
    Home,
    FooterSection,
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 10px;
}
</style>
