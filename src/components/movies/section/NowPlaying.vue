<template>
  <MovieWrapper
    :movies="data"
    title="Now Playing Movies"
    pathMore="/now-playing"
  />
</template>

<script setup lang="ts">
import { useFetch } from "@/components/composable/useFetch";
import MovieWrapper from "../MovieWrapper.vue";

const { data } = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
