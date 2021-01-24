import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QuizList from "../views/QuizList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quizList",
    name: "QuizList",
    component: QuizList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
