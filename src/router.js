import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import CounterView from "./views/CounterView";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterView
    }
  ]
});
