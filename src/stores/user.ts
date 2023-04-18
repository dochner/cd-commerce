import { ref } from 'vue';
import { User } from './../types/index';
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<Partial<User> | null>()

  const setUser = (payload: Partial<User> | null) => {
    user.value = payload
  } 

  return {
    user,
    setUser
  }
})


if (import.meta.env.hot)
  import.meta.hot!.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))