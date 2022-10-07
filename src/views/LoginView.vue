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
          <RouterLink to="/register">
            <span class="text-gray-700 text-sm font-semibold"> Sign up </span>
          </RouterLink>
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
            @click="isModalOpen = true"
          >
            Sign in with SSO
          </button>
        </div>
      </form>
    </div>

    <!-- SSO modal -->
    <div
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      v-if="isModalOpen"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            class="absolute z-50 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            @click="isModalOpen = false"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <!-- Modal header -->
          <div class="py-4 px-6 rounded-t border-b dark:border-gray-600">
            <h3
              class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
            >
              Login with SSO
            </h3>
          </div>
          <!-- Modal body -->
          <div class="p-6">
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Connect easier with the third-party.
            </p>
            <ul class="my-4 space-y-3">
              <li @click="handleLoginGoogle">
                <a
                  href="#"
                  class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">Google</span>
                </a>
              </li>
              <li
                @click="handleLoginGithub"
                class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Github</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { githubProvider, googleProvider } from "@/config/firebase";
import { mapAuthCodeToMessage } from "@/helper";
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useStore } from "../store/index";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

const isModalOpen = ref(false);

async function handleLogin() {
  try {
    await store.signIn(email.value, password.value);
    router.push("/");
  } catch (err: any) {
    error.value = mapAuthCodeToMessage(err.code);
  }
}

async function handleLoginGoogle() {
  try {
    await store.signInWithProvider(googleProvider);
    router.push("/");
  } catch (err: any) {
    error.value = mapAuthCodeToMessage(err.code);
  }
}

async function handleLoginGithub() {
  try {
    await store.signInWithProvider(githubProvider);
    router.push("/");
  } catch (err: any) {
    error.value = mapAuthCodeToMessage(err.code);
  }
}
</script>

<style scoped></style>
