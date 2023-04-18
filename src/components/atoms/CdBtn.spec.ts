import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import CdBtn from "./CdBtn.vue";

const wrapperFactory = (props?: any) => {
  return mount(CdBtn, {
    ...props,
  });
};

describe("CdBtn", () => {
  test("mount component", () => {
    const wrapper = wrapperFactory();
    console.log("wrapper: ", wrapper.html());

    expect(wrapper.html()).toBeTruthy;
  });

  test("should change colors", () => {
    const wrapper = wrapperFactory({
      propsData: {
        color: "black",
      },
    });

    expect(wrapper.find(".text-black")).toBeTruthy();
  });

  test("should change label content", async () => {
    const wrapper = wrapperFactory({
      propsData: {
        label: "Testing",
      },
    });

    console.log("wrapper (label): ", wrapper.html());

    expect(wrapper.html()).toContain("Testing");

    await wrapper.setProps({ label: "Tested" });

    expect(wrapper.html()).not.toContain("Testing");
  });

  test("should change loading state", async () => {
    const wrapper = wrapperFactory({
      propsData: {
        loading: true,
      },
    });

    expect(wrapper.find(".q-spinner").exists()).toBeTruthy();

    await wrapper.setProps({ loading: false });

    expect(wrapper.find(".q-spinner").exists()).toBeFalsy();
  });
});
