import apiData from "@/api";

// initial state
const state = {
  all: [],
  hotelsIDs: [],
  isLoading: false
};

// actions
export const actions = {
  LOAD_HOTELS_LIST: ({ commit }) => {
    commit("SET_LOADING", true);
    apiData()
      .get("hotels")
      .then(response => commit("SET_HOTELS_LIST", { list: response.data }))
      .catch(error => error)
      .finally(() => commit("SET_LOADING", false));
  }
};

// mutations
export const mutations = {
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
