import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import { mutations } from "@/store/modules/price.js";

describe("mutations", () => {
  it("adds a right data to the state", () => {
    const nightNewValue = 5;

    const state = {
      night: 1
    };

    mutations.SET_NIGHT_NUMBER(state, nightNewValue);

    expect(state).toEqual({
      night: nightNewValue
    });
  });
});
