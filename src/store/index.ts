import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";

export const useStore = defineStore("auth", () => {
  const users = ref({});
  const isLoading = ref(false);

  watchEffect(
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        users.value = {
          uid: user.uid,
          email: user.email,
        };
      } else {
        users.value = {};
      }
    })
  );

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    users.value = {};
    await signOut(auth);
  };

  const signInWithProvider = (_provider: any) => {
    return signInWithPopup(auth, _provider);
  };

  return { users, isLoading, signUp, signIn, logout, signInWithProvider };
});
