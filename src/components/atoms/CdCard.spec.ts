import { test, expect } from "vitest";

import { mount } from "@vue/test-utils";
// import { Quasar } from "quasar";

import CdCard from "./CdCard.vue";

// const wrapperFactory = () =>
//   mount(CdCard, {
//     global: {
//       plugins: [Quasar],
//     },
//   });

test("mount component", () => {
  const wrapper = mount(CdCard, {
    propsData: {
      flat: true,
      title: "Douglas",
    },
  });
  // console.log(wrapper.html());

  expect(wrapper.find("#card").exists()).toBeTruthy();
  expect(wrapper.vm.flat).toBeTruthy();
  expect(wrapper.html()).not.toContain("Caio");
});
