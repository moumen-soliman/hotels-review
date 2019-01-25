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
      {{
        currentSelectedID === key.id
          ? night * key.pricePerNight + " per " + night
          : key.pricePerNight + " per " + 1
      }}
      {{ getScoreOfHotel(key.totalScore) }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "hotelCard",
  props: {
    hotelsList: Array,
    hotelsID: Array
  },
  computed: {
    ...mapState({
      // Price states
      night: state => state.price.night
    }),
    // Add first hotel ID as selected ID till user choose one
    currentSelectedID() {
      let currentID = this.$store.state.hotelDetails.currentSelectedID;
      return currentID ? currentID : this.hotelsID;
    }
  },
  methods: {
    ...mapActions({
      // Hotel Details actions
      getSelectedHotelDetails: "hotelDetails/LOAD_HOTEL_SELECTED_DETAILS_LIST"
    }),
    // Switch/case take total score and return the status of Hotel
    getScoreOfHotel(totalScore) {
      let message;
      switch (true) {
        case totalScore > 0 && totalScore <= 5:
          message = 'Not recommended';
          break;
        case totalScore > 5 && totalScore <= 7:
          message = 'good';
          break;
        case totalScore > 7 && totalScore <= 8:
          message = 'Very good';
          break;
        case totalScore > 8 && totalScore <= 10:
          message = 'Excellent';
          break;
        default:
          message = 'No score yet';
      }
      return message;
    },
  },
  created() {
    // Call get hotel details function and passing first index of hotelsID Array
    this.getSelectedHotelDetails(this.hotelsID[0]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
