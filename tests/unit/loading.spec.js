import { mount } from "@vue/test-utils";
import Loading from "@/components/loading";

const wrapper = mount(Loading);

describe("Loading", () => {
  test("is mounted and Vue instance & contain SVG", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains("svg")).toBe(true);
  });
});
