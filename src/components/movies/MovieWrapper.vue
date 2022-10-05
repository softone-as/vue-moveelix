<template>
  <section class="mx-auto bg-gray-100 dark:bg-gray-900 py-8">
    <h1 class="text-4xl font-extrabold dark:text-white px-5 py-4 lg:px-28">
      {{ props.title }}
    </h1>
    <MovieList
      :movies="props.movies"
      :path-more="props.pathMore"
      :show-all="showAll"
    />
  </section>
</template>

<script setup lang="ts">
import type MovieTypes from "@/types";
import type { PropType } from "vue";
import MovieList from "./MovieList.vue";

const props = defineProps({
  movies: { type: Array as PropType<MovieTypes[]>, required: true },
  title: { type: String, required: true },
  showAll: { type: Boolean, default: false },
  pathMore: { type: String, default: "" },
});
</script>

<style scoped></style>
