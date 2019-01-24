<template>
  <div class="row">
    <div
      :class="
        (currentSelectedID === key.id ? 'active ' : '') +
          'hotels-cards__item col-4 text-left'
      "
      v-for="key in hotelsList"
      :key="key.id"
    >
      <a @click="getSelectedHotelDetails(key.id)">{{ key }}</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "hotelCard",
  props: {
    hotelsList: Array,
    hotelsID: Array
  },
  methods: {
    ...mapActions({
      // Hotel Details actions
      getSelectedHotelDetails: "hotelDetails/LOAD_HOTEL_SELECTED_DETAILS_LIST"
    })
  },
  computed: {
    // Add first hotel ID as selected ID till user choose one
    currentSelectedID() {
      let currentID = this.$store.state.hotelDetails.currentSelectedID;
      return currentID ? currentID : this.hotelsID;
    }
  },
  created() {
    // Call get hotel details function and passing first index of hotelsID Array
    this.getSelectedHotelDetails(this.hotelsID[0]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
