import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    path: "/todos",
    name: "Todos",
    component: () =>
      import(/* webpackChunkName: "todos-index" */ "../views/Todos/index.vue"),
    children: [
      {
        path: "",
        name: "List",
        component: () =>
          import(
            /* webpackChunkName: "todos-list" */ "../views/Todos/List.vue"
          ),
      },
      {
        path: "new",
        name: "TodosNew",
        component: () =>
          import(/* webpackChunkName: "todos-new" */ "../views/Todos/New.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
