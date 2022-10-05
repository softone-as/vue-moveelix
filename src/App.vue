<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useStore } from "./store";

const store = useStore();

onMounted(() => store.init());
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped></style>
