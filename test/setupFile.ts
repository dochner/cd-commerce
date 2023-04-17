import { beforeAll } from 'vitest';
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-vitest";
import {setActivePinia, createPinia} from 'pinia'



installQuasarPlugin();

beforeAll(() => {
  setActivePinia(createPinia())
})