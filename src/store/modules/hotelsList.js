import apiData from "@/api";
import axios from "axios";

// initial state
const state = {
  all: Array,
  hotelsIDs: Array,
  isLoading: Boolean
};

// actions
const actions = {
  LOAD_HOTELS_LIST: async ({ commit }) => {
    commit("SET_LOADING", true);
    await axios;
    apiData()
      .get("hotels")
      .then(response => commit("SET_HOTELS_LIST", { list: response.data }))
      .catch(error => error)
      .finally(() => commit("SET_LOADING", false));
  }
};

// mutations
const mutations = {
  SET_HOTELS_LIST: (state, { list }) => {
    (state.all = list), (state.hotelsIDs = list.map(getID => getID.id));
  },
  SET_LOADING: (state, value) => (state.isLoading = value)
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
