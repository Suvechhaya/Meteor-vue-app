<template>
  <div class="container-fluid tbg-light">
    <div class="row">
      <div class="col-12 mt-4 mt-sm-5">
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
        class="col-12 mt-2 mb-3 text-center text-white"
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
  font-size: 14px;
}
i{
  font-size: 1.4em;
  color: white;
}
.tbg-light {
  background-color: var(--blue-md);
}
a {
  color: white;
}
a:hover{
  color: #FFD3A2;
}
</style>