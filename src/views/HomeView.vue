<script setup lang="ts">
import PopularMovies from "../components/movies/section/PopularMovies.vue";
import TopRated from "../components/movies/section/TopRated.vue";
import UpcomingMovies from "../components/movies/section/UpcomingMovies.vue";
import TheWelcome from "../components/TheWelcome.vue";
import NowPlaying from "../components/movies/section/NowPlaying.vue";
</script>

<template>
  <main>
    <TheWelcome />
    <NowPlaying />
    <PopularMovies />
    <TopRated />
    <UpcomingMovies />
  </main>
</template>
