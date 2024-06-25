import { createRouter, createWebHistory } from "vue-router";

import InfoPage from "./pages/InfoPage.vue";
import CheckerPage from "./pages/CheckerPage.vue";
import PaymentPage from "./pages/PaymentPage.vue";

const routes = [
  { path: "/", component: InfoPage },
  { path: "/check", component: CheckerPage },
  { path: "/payment", component: PaymentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
