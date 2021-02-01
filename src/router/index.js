import { createWebHistory, createRouter } from "vue-router";
import NebulaView from "../views/NebulaView.vue";
import EnglishView from "../views/EnglishView.vue";
import MathView from "../views/MathView.vue";

const routes = [
  {
    path: "/",
    name: "NebulaView",
    component: NebulaView,
  },
  {
    path: "/ela",
    name: "EnglishView",
    component: EnglishView,
  },
  {
    path: "/math",
    name: "MathView",
    component: MathView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
