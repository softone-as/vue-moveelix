<template>
  <MovieWrapper :movies="data" title="Upcoming Movies" pathMore="/upcoming" />
</template>

<script setup lang="ts">
import { useFetch } from "@/components/composable/useFetch";
import MovieWrapper from "../MovieWrapper.vue";

const { data } = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/upcoming?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
