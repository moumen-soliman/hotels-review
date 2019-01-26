import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import { actions, mutations } from "@/store/modules/hotelDetails.js";

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: { all: { id: 18671, name: "Sheraton Sharm" } },
      actions: {
        LOAD_HOTEL_SELECTED_DETAILS_LIST:
          actions.LOAD_HOTEL_SELECTED_DETAILS_LIST
      }
    });
  });
  it("mocks an ajax calling using axios", () => {
    return store.dispatch("LOAD_HOTEL_SELECTED_DETAILS_LIST").then(() =>
      expect(store.state.all).toEqual({
        id: 18671,
        name: "Sheraton Sharm"
      })
    );
  });
});

describe("mutations", () => {
  it("adds a right data to the state", () => {
    const list = { id: 1, title: "list" };
    const currentSelectedID = 5;
    const value = true;

    const state = {
      all: [],
      isLoading: Boolean,
      currentSelectedID: Number
    };

    mutations.SET_HOTEL_DETAILS_LIST(state, { list });
    mutations.SET_CURRENT_ID_SELECTED(state, currentSelectedID);
    mutations.SET_LOADING(state, value);

    expect(state).toEqual({
      all: list,
      isLoading: value,
      currentSelectedID: currentSelectedID
    });
  });
});
