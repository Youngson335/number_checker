<template>
  <Header class="header" />
  <div>
    <router-view></router-view>
  </div>
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
</style>
