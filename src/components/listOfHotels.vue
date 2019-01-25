<template>
  <div>
    <div class="hotels-cards">
      <hotel-card :hotelsList="hotelsList" :hotelsID="hotelsID" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import hotelCard from "./hotelCard";

export default {
  name: "listOfHotels",
  components: {
    hotelCard
  },
  computed: {
    ...mapState({
      // Hotels List States
      hotelsList: state => state.hotelsList.all,
      hotelsID: state => state.hotelsList.hotelsIDs
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hotels-cards {
  background: unset;
  padding-bottom: 10px;
}
</style>
