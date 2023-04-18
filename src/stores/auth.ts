import { defineStore } from 'pinia';
import {  UserSignIn } from '~/types';
import { useUserStore } from './user';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore()

  const userCredentials = ref<UserSignIn>({
    email: '',
    password: '',
  })

  const setUserCredentials = (payload: UserSignIn) => {
    userCredentials.value = payload
  }

  const { setUser } = userStore

  const signIn = async () => {
    setUser({ email: userCredentials.value.email })
  }

  return {
    signIn,
    userCredentials,
    setUserCredentials
  }
})