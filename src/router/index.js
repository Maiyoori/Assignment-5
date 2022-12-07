import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import AccountPage from "../views/AccountPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Login',
      component: LoginPage
    },
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/',
      component: AccountPage
    },
  ],
});

export default router;