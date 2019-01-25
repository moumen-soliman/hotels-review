<template>
  <div>
    <div v-if="isLoading">
      <loading />
    </div>
    <div v-else>
      <night-price />
      <reviews :reviews="reviews" />
      <gallery :pictures="hotelDetailsImages" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gallery from "./gallery";
import reviews from "./reviews";
import nightPrice from "./nightPrice";
import loading from "./loading";

export default {
  name: "hotelsDetails",
  components: {
    gallery,
    reviews,
    nightPrice,
    loading
  },
  computed: {
    ...mapState({
      // Hotel Details States
      hotelDetails: state => state.hotelDetails.all,
      hotelDetailsImages: state => state.hotelDetails.all.pictures,
      reviews: state => state.hotelDetails.all.reviews,
      isLoading: state => state.hotelDetails.isLoading
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
