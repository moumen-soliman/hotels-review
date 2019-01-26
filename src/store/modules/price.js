// initial state
const state = {
  night: 1
};

// mutations
export const mutations = {
  SET_NIGHT_NUMBER: (state, value) => (state.night = value)
};

export default {
  namespaced: true,
  state,
  mutations
};
