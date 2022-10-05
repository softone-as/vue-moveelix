<template>
  <MovieWrapper :movies="data" title="Popular Movies" pathMore="/popular" />
</template>

<script setup lang="ts">
import { useFetch } from "@/components/composable/useFetch";
import MovieWrapper from "../MovieWrapper.vue";

const { data } = useFetch(
  `${import.meta.env.VITE_API_URL}/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }`
);
</script>

<style scoped></style>
