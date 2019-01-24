import Vue from "vue";
import Vuex from "vuex";
import hotelsList from "./modules/hotelsList";
import hotelDetails from "./modules/hotelDetails";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    hotelsList,
    hotelDetails
  }
});

export default store;
