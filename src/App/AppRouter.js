import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import ServiceWrapperPage from "./";
/*
import CartRouter from "./Cart/CartRouter";
import ProfileRouter from "./Profile/ProfileRouter";
*/
import ShowcaseRouter from "./Showcase/ShowcaseRouter";

const routes = [
  {
    path: "/",
    component: ServiceWrapperPage,
    children: [ ...ShowcaseRouter,/*...CartRouter, ...ProfileRouter*/],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition || to.name == from.name) {
      return savedPosition;
    }
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
