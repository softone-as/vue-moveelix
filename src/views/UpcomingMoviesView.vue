<template>
  <div class="container mx-auto">
    <MovieWrapper :movies="upcomingMovies" title="Upcoming Movies" showAll />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "@/components/composable/useFetch";
import MovieWrapper from "../components/movies/MovieWrapper.vue";

const { data: upcomingMovies } = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/upcoming?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
