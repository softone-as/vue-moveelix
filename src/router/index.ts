import PopularMoviesVue from "@/components/movies/section/PopularMovies.vue";
import TopRatedVue from "@/components/movies/section/TopRated.vue";
import UpcomingMoviesVue from "@/components/movies/section/UpcomingMovies.vue";
import NowPlayingViewVue from "@/views/NowPlayingView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/now-playing",
      name: "now-playing",
      component: NowPlayingViewVue,
    },
    {
      path: "/popular",
      name: "popular",
      component: PopularMoviesVue,
    },
    {
      path: "/top-rated",
      name: "top-rated",
      component: TopRatedVue,
    },
    {
      path: "/upcoming",
      name: "upcoming",
      component: UpcomingMoviesVue,
    },
    {
      path: "/movie/:id",
      name: "detail",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DetailView.vue"),
    },
  ],
});

export default router;
