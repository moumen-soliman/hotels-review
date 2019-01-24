import apiData from "@/api";
import axios from "axios";

// initial state
const state = {
  all: Array,
  isLoading: Boolean,
  currentSelectedID: Number
};

// actions
const actions = {
  LOAD_HOTEL_SELECTED_DETAILS_LIST: async ({ commit }, payload) => {
    commit("SET_LOADING", true);
    commit("SET_CURRENT_ID_SELECTED", payload);
    await axios;
    apiData()
      .get(`hotelDetails/${payload}`)
      .then(response =>
        commit("SET_HOTEL_DETAILS_LIST", { list: response.data })
      )
      .catch(error => error)
      .finally(() => commit("SET_LOADING", false));
  }
};

// mutations
const mutations = {
  SET_HOTEL_DETAILS_LIST: (state, { list }) => (state.all = list),
  SET_CURRENT_ID_SELECTED: (state, value) => (state.currentSelectedID = value),
  SET_LOADING: (state, value) => (state.isLoading = value)
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
