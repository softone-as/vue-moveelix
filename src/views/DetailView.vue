<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 my-12">
      <img
        class="rounded-t-lg w-72 mx-auto"
        :src="'https://image.tmdb.org/t/p/w500/' + data?.poster_path"
        :alt="data?.title"
      />
      <div class="flex flex-col justify-center w-3/4">
        <div class="flex justify-between mb-2">
          <h1 class="text-2xl font-bold text-gray-400 dark:text-white">
            {{ data?.title }}
          </h1>
          <span
            class="text-2xl font-bold tracking-tight text-gray-400 dark:text-white"
          >
            {{ data?.vote_average }}
          </span>
        </div>
        <div class="flex mt-2">
          <span
            v-for="genre in data?.genres"
            :key="genre.id"
            class="text-sm font-medium bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mr-3"
          >
            {{ genre.name }}
          </span>
        </div>
        <div class="overview mt-8">
          <h1 class="text-xl font-bold text-gray-400 dark:text-white">
            Overview
          </h1>
          <p class="font-normal text-gray-700 dark:text-gray-400 mt-3">
            {{ data?.overview }}
          </p>
        </div>
      </div>
    </div>
    <div class="similar-movie">
      <MovieWrapper :movies="similarMovies.data.value" title="Similar Movies" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch, useFetchDetail } from "@/components/composable/useFetch";
import { useRoute } from "vue-router";
import MovieWrapper from "../components/movies/MovieWrapper.vue";

const route = useRoute();

const { data } = useFetchDetail(
  `${import.meta.env.VITE_API_URL}/movie/${route.params.id}?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);

const similarMovies = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/${route.params.id}/similar?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
