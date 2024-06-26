<template>
  <div class="registration">
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
.registration {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 7.5rem;
  position: relative;
}
</style>
