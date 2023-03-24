import type { App } from "vue";
import type { Router } from "vue-router";

export interface VueContext {
  app: App;
  router: Router;
}

export type UserModule = (ctx: VueContext) => void;

export type NavMenuItem = {
  title: string;
  href: string;
}