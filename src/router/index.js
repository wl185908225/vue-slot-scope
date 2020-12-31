import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Home1 from "../views/Home1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home1",
    component: Home1
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
