import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ResultPage from "../views/ResultPage.vue";
import PackageDetailsPage from "../views/PackageDetailsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/result-page/s=:keyword",
    name: "ResultPage",
    component: ResultPage,
    props: true,
  },
  {
    path: "/package-details-page/:id",
    name: "PackageDetailsPage",
    component: PackageDetailsPage,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
