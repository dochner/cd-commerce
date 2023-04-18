import { test, describe, expect, beforeAll } from "vitest";
import { mount } from "@vue/test-utils";
import PublicMenuDrawer from "./PublicMenuDrawer.vue";

describe("PublicMenuDrawer", () => {
  const wrapperFactory = (props?: Record<string, any>) =>
    mount(PublicMenuDrawer, {
      ...props,
    });

  beforeAll(() => {
    global.innerWidth = 600;
  });

  test("is drawer mounted", () => {
    const wrapper = wrapperFactory();
    expect(wrapper.find("#public-menu-drawer").exists()).toBeTruthy();
  });
});
