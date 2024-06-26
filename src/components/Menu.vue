<template>
  <nav class="menu">
    <TransitionGroup name="fade" tag="div" class="menu__wrapper">
      <div
        v-for="item in menu_items"
        :key="item.id"
        @mouseover="setActive(item.id)"
        @mouseleave="setInactive(item.id)"
        @click="selectedMenu(item.id)"
        class="menu__items"
        :class="{
          active: activeItem === item.id,
          active__menu: activeMenu === item.id,
          inactive: inactiveItem === item.id,
        }"
      >
        <p>{{ item.title }}</p>
      </div>
      <Slide right class="burger">
        <div
          v-for="item in menu_items"
          :key="item.id"
          @mouseover="setActive(item.id)"
          @mouseleave="setInactive(item.id)"
          @click="selectedMenu(item.id)"
          class="menu__items"
          :class="{
            active: activeItem === item.id,
            active__menu: activeMenu === item.id,
            inactive: inactiveItem === item.id,
          }"
        >
          <p>{{ item.title }}</p>
        </div>
      </Slide>
    </TransitionGroup>
  </nav>
</template>

<script>
import { Slide } from "vue3-burger-menu";
export default {
  components: {
    Slide,
  },
  data() {
    return {
      menu_items: [
        { id: 0, title: "Инфо", rout: "" },
        { id: 1, title: "Чекер", rout: "check" },
        { id: 2, title: "Оплата", rout: "payment" },
        { id: 3, title: "Регистрация", rout: "registration" },
        { id: 4, title: "Войти", rout: "login" },
      ],
      activeItem: null,
      inactiveItem: null,
      activeMenu: 0,
      isOpen: false,
    };
  },
  methods: {
    setActive(itemId) {
      this.activeItem = itemId;
      this.inactiveItem = null;
    },
    setInactive(itemId) {
      this.inactiveItem = itemId;
      this.activeItem = null;
    },
    resetStyleBurger() {
      const bckg = document.querySelector(".bm-overlay");
      const menu = document.querySelector(".bm-menu");
      menu.style.left = "auto";
      menu.style.right = "0px";
      menu.style.width = "0px";
      if (bckg) {
        bckg.classList.remove("bm-overlay");
      }
    },
    selectedMenu(id) {
      this.resetStyleBurger();
      this.$router.push(`/${this.menu_items[id].rout}`);
      this.activeMenu = id;
    },
  },
};
</script>

<style>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu__wrapper {
  display: flex;
}
.menu__items {
  border-left: 1px solid white;
  cursor: pointer;
  position: relative;
  padding: 0 10px;
}
.menu__items:first-child {
  border: none;
}
.menu__items p {
  color: white;
  font-size: clamp(20px, 6vw, 22px);
  font-weight: 700;
  text-transform: lowercase;
  margin: 0 15px;
}
.menu__items::before {
  content: "";
  width: 0;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 10px;
  background: white;
}
.active__menu p {
  color: black;
  animation: showActiveMenu 0.2s ease;
}
@keyframes showActiveMenu {
  0% {
    color: white;
  }
  100% {
    color: black;
  }
}
.menu__items.active::before {
  width: calc(100% - 20px);
  animation: hoverItem 0.3s ease forwards;
}
.menu__items.inactive::before {
  animation: reverseHoverItem 0.3s ease forwards;
}

@keyframes hoverItem {
  0% {
    width: 0;
  }
  100% {
    width: calc(100% - 20px);
  }
}

@keyframes reverseHoverItem {
  0% {
    width: calc(100% - 20px);
    left: 10px;
  }
  100% {
    width: 0;
    left: calc(100% - 10px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.burger {
  display: none;
}
.bm-burger-button {
  position: relative !important;
  width: 25px !important;
  height: 15px !important;
  left: 0 !important;
  top: 0 !important;
  cursor: pointer !important;
}
.bm-burger-bars {
  background-color: #e9e9e9 !important;
}
.bm-overlay {
  background: #184934db !important;
}
.bm-item-list .menu__items {
  border-left: none;
}
.bm-menu {
  background-color: #227454 !important;
  box-shadow: 0 0 20px 1px rgb(34 34 34 / 100%);
}
.bm-overlay {
  background-color: #30a472db !important;
  transition: 0.3s all;
}

@media (max-width: 890px) {
  .menu__items {
    display: none;
  }
  .burger {
    display: block;
  }
  .bm-overlay {
    background: #184934db !important;
  }
}
</style>
