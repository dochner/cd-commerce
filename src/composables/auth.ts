import { ref } from 'vue';

const useAuthUser = ref({});

export const useAuth = () => {
  const signIn = async ({ email, password}: { email: string, password: string}) => {
      console.log("email: ", email, " password: ", password);
  }

  return {
    user: useAuthUser,
    signIn,
  }
}