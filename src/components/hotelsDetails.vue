<template>
  <div>
    <div v-if="isLoading">
      <loading />
    </div>
    <div v-else>
      <div class="selected-hotel">
        <div class="row">
          <div class="col text-left">
            <h1>{{ hotelDetails.name }}</h1>
            <h4>For <night-price /> Nights</h4>
          </div>
        </div>
        <gallery :pictures="hotelDetailsImages" />
        <reviews :reviews="reviews" />
      </div>
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
<style lang="scss" scoped>
.selected-hotel {
  border: 1px solid $blue;
  padding: 20px;
  background-color: $white;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
}
</style>
