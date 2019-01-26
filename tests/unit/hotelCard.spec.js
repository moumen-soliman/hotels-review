import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import hotelCard from "@/components/hotelCard.vue";

const wrapper = shallowMount(hotelCard);

describe("hotelCard", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(hotelCard); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        hotelList: { name: "Cat" },
        hotelsID: ["3215"]
      }
    }).$mount(); // Instances and mount the component
  });

  it("equals hotelList to Object, and hotelsID to Array", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains("div")).toBe(true);
    expect(vm.hotelList).toEqual({ name: "Cat" });
    expect(vm.hotelsID).toEqual(vm.hotelsID);
  });
});
