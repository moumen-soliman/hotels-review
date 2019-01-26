import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";

const wrapper = shallowMount(Home);

describe("Home", () => {
  test("is mounted and Vue instance & contain components", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains("div")).toBe(true);
  });
});
