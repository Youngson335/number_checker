<template>
  <div class="checker">
    <div class="checker__title">
      <h1>Введите номера телефонов. Каждый новый номер с новой строки</h1>
    </div>
    <div class="checker__input">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.checker {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.checker__input {
  width: 100%;
  max-width: 600px;
  display: flex;
}
textarea {
  max-width: calc(100% - 50px);
  margin: 0 auto;
  width: 100%;
}
h1 {
  text-align: center;
  max-width: 450px;
  line-height: 31px;
  margin-bottom: 20px;
}
</style>
