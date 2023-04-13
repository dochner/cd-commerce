import { beforeAll, expect } from 'vitest';
import { describe, test } from 'vitest'
import { useAuthStore } from './auth'
import {setActivePinia, createPinia} from 'pinia'

describe('useAuthStore', () => {
  beforeAll(() => {
    setActivePinia(createPinia())
  })

  test('should be equal to userStore', () => {
    const authStore = useAuthStore()

    expect(authStore.userCredentials.email).not.toEqual("")
  })
})