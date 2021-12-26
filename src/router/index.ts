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
  {
    path: "/todos2",
    name: "Todos2",
    component: () =>
      import(
        /* webpackChunkName: "todos-index2" */ "../views/Todos2/index.vue"
      ),
    children: [
      {
        path: "",
        name: "List2",
        component: () =>
          import(
            /* webpackChunkName: "todos-list2" */ "../views/Todos2/List.vue"
          ),
      },
      {
        path: "new",
        name: "TodosNew2",
        component: () =>
          import(
            /* webpackChunkName: "todos-new2" */ "../views/Todos2/New.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
