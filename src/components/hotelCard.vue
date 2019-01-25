<template>
  <div class="row">
    <div
      class="hotels-cards__item col-4 text-left"
      v-for="key in hotelsList"
      :key="key.id"
    >
      <div
        :class="
          (currentSelectedID === key.id ? 'active ' : '') +
            'hotels-cards__item__inner'
        "
      >
        <div class="col-12 no-padding">
          <a @click="getSelectedHotelDetails(key.id)">
            <h6>{{ key.name }}</h6>
          </a>
        </div>
        <div class="row">
          <div class="col-4">
            <img :src="key.photo" width="80" />
          </div>
          <div class="col-8 no-padding">
            <p>
              {{
                currentSelectedID === key.id
                  ? `$${night * key.pricePerNight} for ${night} night`
                  : `$${key.pricePerNight} for 1 night`
              }}
            </p>
            <p>{{ key.totalScore }} {{ getScoreOfHotel(key.totalScore) }}</p>
            <p>{{ `${key.totalReviews} reviews` }}</p>
          </div>
        </div>
        <div class="row"></div>
      </div>
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
          message = "Not recommended";
          break;
        case totalScore > 5 && totalScore <= 7:
          message = "good";
          break;
        case totalScore > 7 && totalScore <= 8:
          message = "Very good";
          break;
        case totalScore > 8 && totalScore <= 10:
          message = "Excellent";
          break;
        default:
          message = "No score yet";
      }
      return message;
    }
  },
  created() {
    // Call get hotel details function and passing first index of hotelsID Array
    this.getSelectedHotelDetails(this.hotelsID[0]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hotels-cards {
  &__item {
    padding: 20px;
    &__inner {
      box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
      border: 1px solid $gray;
      padding: 10px;
      background: $white;
      opacity: 0.6;
      a {
        color: $blue;
        text-decoration: underline;
        cursor: pointer;
        h6 {
          margin-bottom: 20px;
        }
      }
      img {
        border-radius: 5px;
      }
      &:hover,
      &.active {
        opacity: 1;
        border: 1px solid $blue;
      }
    }
  }
}
</style>
