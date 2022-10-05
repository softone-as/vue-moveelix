<template>
  <div
    class="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden mt-12"
  >
    <div class="relative hidden xl:block xl:w-1/2 h-full">
      <img
        class="absolute h-auto w-full object-cover"
        src="https://images.unsplash.com/photo-1593940256067-fb4acd831804"
        alt="cinema"
      />
    </div>
    <div class="w-full xl:w-1/2 p-8">
      <form @submit.prevent="handleLogin">
        <h1 class="text-2xl font-bold">Sign in to your account</h1>
        <div>
          <span class="text-gray-600 text-sm"> Don't have an account? </span>
          <span class="text-gray-700 text-sm font-semibold"> Sign up </span>
        </div>
        <div class="mb-4 mt-6">
          <label
            class="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            v-model="email"
            class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
            id="email"
            type="text"
            placeholder="Your email address"
          />
        </div>
        <div class="mb-6 mt-6">
          <label
            class="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            v-model="password"
            class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
            id="password"
            type="password"
            placeholder="Your password"
          />
          <a
            class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
            href="/forgot"
          >
            Forgot Password?
          </a>
        </div>
        <div class="flex flex-col w-full mt-8">
          <button
            class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
            type="submit"
          >
            Sign in
          </button>
          <button
            class="mt-4 w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
            type="button"
          >
            Sign in with SSO
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mapAuthCodeToMessage } from "@/helper";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

async function handleLogin() {
  try {
    await store.signIn(email.value, password.value);
    router.push("/");
  } catch (err: any) {
    error.value = mapAuthCodeToMessage(err.code);
  }
}
</script>

<style scoped></style>
