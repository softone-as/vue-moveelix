<template>
  <div class="container mx-auto">
    <MovieWrapper :movies="data" title="Now Playing Movies" showAll />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "@/components/composable/useFetch";
import MovieWrapper from "../components/movies/MovieWrapper.vue";

const { data } = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
