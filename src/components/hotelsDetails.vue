<template>
  <div>
    <div v-if="isLoading">
      <loading />
    </div>
    <div v-else>
      <reviews :reviews="reviews" />
      <gallery :pictures="hotelDetailsImages" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gallery from "./gallery";
import reviews from "./reviews";
import loading from "./loading";

export default {
  name: "hotelsDetails",
  components: {
    gallery,
    reviews,
    loading
  },
  computed: {
    ...mapState({
      // Hotel Details actions
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
