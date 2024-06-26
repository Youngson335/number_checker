<template>
  <div class="login">
    <ValidationRegister />
  </div>
</template>
<script>
import ValidationRegister from "../components/ValidationRegister.vue";
export default {
  components: {
    ValidationRegister,
  },
};
</script>
<style>
.login {
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
}
</style>
