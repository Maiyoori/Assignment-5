import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Account from "../views/Account.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/',
      component: Account
    },
  ],
});

export default router;