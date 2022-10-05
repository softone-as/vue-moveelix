<script setup lang="ts">
import type MovieTypes from "@/types";
import { RouterLink } from "vue-router";

const props = defineProps<{ movie: MovieTypes }>();
</script>

<template>
  <div
    class="my-4 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
  >
    <!-- Clickable Area -->
    <RouterLink :to="'/movie/' + props.movie.id" class="cursor-pointer">
      <figure>
        <!-- Image -->
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + props.movie.poster_path"
          class="rounded-t h-72 w-full object-cover"
          :alt="props.movie.title"
        />
      </figure>
    </RouterLink>
  </div>
</template>

<style scoped></style>
