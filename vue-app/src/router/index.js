import { createRouter, createWebHistory } from "vue-router";
import BodyHome from "../components/BodyHome.vue";
import LoginForm from "../components/LoginForm.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: BodyHome,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
