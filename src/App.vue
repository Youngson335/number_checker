<template>
  <Header />
  <main class="container">
    <router-view></router-view>
  </main>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style>
html {
  background-image: url("./assets/background.jpg");
  background-size: cover;
}
body {
  background-color: #30a472db;
  min-height: 100vh;
}
.container {
  max-width: calc(100% - 30px);
  margin: 0 auto;
}
</style>
