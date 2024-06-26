import { createRouter, createWebHistory } from "vue-router";

import InfoPage from "./pages/InfoPage.vue";
import CheckerPage from "./pages/CheckerPage.vue";
import PaymentPage from "./pages/PaymentPage.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";
import LoginPage from "./pages/LoginPage.vue";

const routes = [
  { path: "/", component: InfoPage },
  { path: "/check", component: CheckerPage },
  { path: "/payment", component: PaymentPage },
  { path: "/registration", component: RegistrationPage },
  { path: "/login", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
