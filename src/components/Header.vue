<template>
  <div class="container">
    <header class="header">
      <Logo />
      <Menu />
    </header>
  </div>
</template>
<script>
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
export default {
  components: {
    Logo,
    Menu,
  },
};
</script>
<style>
.header {
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #227454fa;
  border: 1px solid #f1f1f19c;
  margin: 0 auto;
  box-shadow: 0 0 20px 1px rgb(34 34 34 / 57%);
  margin-bottom: 20px;
}
</style>
