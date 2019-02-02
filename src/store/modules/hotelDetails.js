import apiData from "@/api";

// initial state
const state = {
  all: [],
  isLoading: false,
  currentSelectedID: 0
};

// actions
export const actions = {
  LOAD_HOTEL_SELECTED_DETAILS_LIST: ({ commit }, payload) => {
    commit("SET_LOADING", true);
    commit("SET_CURRENT_ID_SELECTED", payload);
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
export const mutations = {
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
