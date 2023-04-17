import { useUserStore } from './user';
import { UserSignIn } from './../types/index';
import { expect } from 'vitest';
import { describe, test } from 'vitest'
import { useAuthStore } from './auth'

describe('useAuthStore', () => {
  test('should be equal to userStore', () => {
    const authStore = useAuthStore()

    expect(authStore.userCredentials.email).toEqual("")
  })

  test('should set credentials value', () => {
    const authStore = useAuthStore()

    const userCredentials: UserSignIn = { email: 'example@example.com', password: '123' }
    
    authStore.setUserCredentials(userCredentials)
    expect(authStore.userCredentials.email).toEqual(userCredentials.email)
    expect(authStore.userCredentials.password).toEqual(userCredentials.password)
  })

  test('should set userStore user property', async () => {
    const authStore = useAuthStore()
    const userStore = useUserStore()

    const userCredentials: UserSignIn = { email: 'example@example.com', password: '123' }
    
    authStore.setUserCredentials(userCredentials)

    await authStore.signIn()
    
    expect(userStore.user?.email).toEqual(userCredentials.email)
  })
})