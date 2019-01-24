<template>
  <div class="container">
    <listOfHotels />
    <hotelsDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import listOfHotels from '@/components/listOfHotels.vue'
import hotelsDetails from '@/components/hotelsDetails.vue'

export default {
  name: 'home',
  components: {
    listOfHotels,
    hotelsDetails
  }
}
</script>
