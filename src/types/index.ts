import { EmbeddedValidationRule, EmbeddedValidationRuleFn } from "quasar";
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
};

export type ID = number | string;

export type Plataform = {
  id: ID;
  name: string;
};

export type Game = {
  id: ID;
  name: string;
  price: number;
  promotion?: number;
  platforms?: Plataform[];
  img?: string;
};

export type User = {
  id: ID;
  avatar?: string;
  name: string;
  email: string;
  password?: string;
};

export type UserSignIn = {
  email: string;
  password: string;
};

export type InputRules = Record<
  EmbeddedValidationRule,
  EmbeddedValidationRuleFn<any>
>;
