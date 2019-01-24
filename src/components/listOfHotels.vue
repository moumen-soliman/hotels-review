<template>
  <div>
    <div class="hotels-cards">
      <hotelCard :hotelsList="hotelsList" :hotelsID="hotelsID" />
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
      // Hotels List Actions
      hotelsList: state => state.hotelsList.all,
      hotelsID: state => state.hotelsList.hotelsIDs
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotels-cards {
  color: black;
  background: white;
}
</style>
