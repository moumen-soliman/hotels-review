import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import { actions, mutations } from "@/store/modules/hotelsList.js";

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        all: {
          id: 37681,
          name: "Hilton Sharm",
          totalReviews: 1678,
          totalScore: 8.5,
          pricePerNight: 180,
          photo: "http://picsum.photos/100/100/?image=109"
        }
      },
      actions: {
        LOAD_HOTELS_LIST: actions.LOAD_HOTELS_LIST
      }
    });
  });
  it("mocks an ajax calling using axios", () => {
    return store.dispatch("LOAD_HOTELS_LIST").then(() =>
      expect(store.state.all).toEqual({
        id: 37681,
        name: "Hilton Sharm",
        totalReviews: 1678,
        totalScore: 8.5,
        pricePerNight: 180,
        photo: "http://picsum.photos/100/100/?image=109"
      })
    );
  });
});

describe("mutations", () => {
  it("adds a right data to the state", () => {
    const list = [{ id: 1, title: "list" }];
    const hotelsIDs = [1];
    const value = true;

    const state = {
      all: [],
      isLoading: Boolean,
      hotelsIDs: []
    };

    mutations.SET_HOTELS_LIST(state, { list, hotelsIDs });
    mutations.SET_LOADING(state, value);

    expect(state).toEqual({
      all: list,
      isLoading: value,
      hotelsIDs: hotelsIDs
    });
  });
});
