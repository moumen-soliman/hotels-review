<template>
  <div id="app">
    <loading v-if="isLoading" />
    <router-view v-else />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import loading from "@/components/loading";

export default {
  name: "App",
  components: {
    loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.hotelsList.isLoading
    })
  },
  methods: {
    ...mapActions({
      //Hotels List actions
      loadHotelsList: "hotelsList/LOAD_HOTELS_LIST"
    })
  },
  created() {
    this.loadHotelsList();
  }
};
</script>

<style lang="scss">
body {
  background-color: $light-gray !important;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $black;
    margin-top: 60px;
  }
}
</style>
