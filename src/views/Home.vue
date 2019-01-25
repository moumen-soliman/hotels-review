<template>
  <div class="container">
    <list-of-hotels />
    <hotels-details />
  </div>
</template>

<script>
// @ is an alias to /src
import listOfHotels from "@/components/listOfHotels.vue";
import hotelsDetails from "@/components/hotelsDetails.vue";

export default {
  name: "home",
  components: {
    listOfHotels,
    hotelsDetails
  }
};
</script>
