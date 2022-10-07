<template>
  <div class="container mx-auto">
    <MovieWrapper :movies="popularMovies" title="Popular Movies" showAll />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "@/components/composable/useFetch";
import MovieWrapper from "../components/movies/MovieWrapper.vue";

const { data: popularMovies } = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
