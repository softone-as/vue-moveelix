<template>
  <div
    class="flex flex-col justify-center items-center mx-auto bg-gray-100 dark:bg-gray-900 px-5 md:flex-row lg:px-28"
  >
    <div
      v-if="props.showAll"
      class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <MovieItem v-for="movie in props.movies" :key="movie.id" :movie="movie" />
    </div>
    <div
      v-else
      class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <MovieItem
        v-for="movie in props.movies?.slice(0, 3)"
        :key="movie.id"
        :movie="movie"
      />
      <div
        class="my-4 rounded border-green-700 shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 flex flex-col justify-center"
      >
        <!-- Clickable Area -->
        <RouterLink
          :to="props.pathMore"
          class="cursor-pointer text-white text-center"
        >
          See More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type MovieTypes from "@/types";
import type { PropType } from "vue";
import { RouterLink } from "vue-router";
import MovieItem from "./MovieItem.vue";

const props = defineProps({
  movies: { type: Array as PropType<MovieTypes[]>, required: true },
  showAll: { type: Boolean, default: false },
  pathMore: { type: String, default: "" },
});
</script>

<style scoped></style>
