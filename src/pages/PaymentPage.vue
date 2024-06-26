<template>
  <div class="payment container">
    <form class="payment__form">
      <div class="form__info">
        <div class="form__text"><p>Введите сумму пополнения баланса</p></div>
        <div class="form__input">
          <input type="number" placeholder="1000" />
        </div>
        <div class="form__button">
          <button>Пополнить</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style>
.payment {
  min-height: 90vh;
}
.payment__form {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 50vh;
}

.form__text {
  font-size: clamp(15px, 5vw, 25px);
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}
.form__input input {
  height: 30px;
  width: calc(100% - 10px);
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 10px;
}
.form__input input::placeholder {
  color: #10101075;
}
.form__input input:focus-visible {
  outline: none;
}
.form__button {
  display: flex;
  justify-content: start;
  align-items: center;
}
.form__button button {
  border: none;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s all;
}
.form__button button:hover {
  background-color: #d1d1d1;
}
</style>
