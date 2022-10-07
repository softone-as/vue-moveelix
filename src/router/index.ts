import PopularMoviesVue from "@/components/movies/section/PopularMovies.vue";
import TopRatedVue from "@/components/movies/section/TopRated.vue";
import UpcomingMoviesVue from "@/components/movies/section/UpcomingMovies.vue";
import { auth } from "@/config/firebase";
import NowPlayingViewVue from "@/views/NowPlayingView.vue";
import RegisterViewVue from "@/views/RegisterView.vue";
import { onAuthStateChanged } from "@firebase/auth";
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterViewVue,
    },
    {
      path: "/now-playing",
      name: "now-playing",
      component: NowPlayingViewVue,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/popular",
      name: "popular",
      component: PopularMoviesVue,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/top-rated",
      name: "top-rated",
      component: TopRatedVue,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/upcoming",
      name: "upcoming",
      component: UpcomingMoviesVue,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/movie/:id",
      name: "detail",
      component: () => import("../views/DetailView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.path === "/login" && (await getCurrentUser())) {
    next("/");
    return;
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
