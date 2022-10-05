<template>
  <MovieWrapper :movies="data" title="Top Rated Movies" pathMore="/top-rated" />
</template>

<script setup lang="ts">
import { useFetch } from "@/components/composable/useFetch";
import MovieWrapper from "../MovieWrapper.vue";

const { data } = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/top_rated?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
