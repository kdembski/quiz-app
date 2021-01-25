import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QuizList from "../views/QuizList.vue";
import QuizDetails from "../views/QuizDetails.vue";

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
  {
    path: "/quizDetails/:id",
    name: "QuizDetails",
    component: QuizDetails,
    params: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
