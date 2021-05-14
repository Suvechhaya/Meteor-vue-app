<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
        <ul class="list-unstyled list-inline social text-center">
          <li class="list-inline-item">
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li class="list-inline-item">
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li class="list-inline-item">
            <a href="#"><i class="fa fa-instagram"></i></a>
          </li>
          <li class="list-inline-item">
            <a href="#"><i class="fa fa-google-plus"></i></a>
          </li>
          <li class="list-inline-item">
            <a href="#" target="_blank"><i class="fa fa-envelope"></i></a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black"
      >
        <p>
          <u><a href="#">Breathe Meditation app</a></u>
          is a simple application created for a personal purpose to help break
          tension during work hours. Let's give it a try.
        </p>
        <p class="h6">
          © copyright {{ date }} Breathe - All right Reversed.
        </p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
p {
  font-family: serif;
}
</style>