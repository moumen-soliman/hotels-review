import Vue from "vue";
import Vuex from "vuex";
import price from "./modules/price";
import hotelsList from "./modules/hotelsList";
import hotelDetails from "./modules/hotelDetails";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    price,
    hotelsList,
    hotelDetails
  }
});

export default store;
