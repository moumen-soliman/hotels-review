<template>
  <div>
    <select :value="night" @change="updateNight" min="1" max="99">
      <option v-for="(key, index) in nightNumber" :value="key" :key="index">
        {{ key }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "nightPrice",
  data() {
    return {
      nightNumber: []
    };
  },
  computed: {
    ...mapState({
      // Price States
      night: state => state.price.night
    })
  },
  methods: {
    // Updating night number based on event target value of select
    updateNight(e) {
      this.$store.commit("price/SET_NIGHT_NUMBER", e.target.value);
    },
    // Looping generate number from 1 to 99 to set as options in select
    generateNumber() {
      for (var value = 1; value <= 99; value++) {
        this.nightNumber.push(value);
      }
    }
  },
  created() {
    this.generateNumber();
  }
};
</script>
