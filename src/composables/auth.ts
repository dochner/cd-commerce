import { ref } from 'vue';
import { User, UserSignIn } from '~/types';

const useAuthUser = ref<User>();

export const useAuth = () => {
  const signIn = async ({ email, password}: UserSignIn) => {
      // TODO: Implement signIn logic and remove console.log
      console.log("email: ", email, " password: ", password);
  }

  return {
    user: useAuthUser,
    signIn,
  }
}