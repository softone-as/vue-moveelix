<template>
  <div class="container mx-auto">
    <MovieWrapper :movies="topRatedMovies" title="Top Rated Movies" showAll />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "@/components/composable/useFetch";
import MovieWrapper from "../components/movies/MovieWrapper.vue";

const { data: topRatedMovies } = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/top_rated?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
