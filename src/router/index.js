import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // HomeView는 초기여서 import를 미리 위에서 하고 about은 클릭되면 임포트 한번에 메인에서 되면 너무 느려서 별도의 js파일로 만들어서, 그래서 home은 빌드하고 js파일이 없다
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//router란 객체를 내보낸다(브라우저 url에 따라 경로 지정)
export default router;
