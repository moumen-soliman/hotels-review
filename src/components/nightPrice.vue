<template>
  <div class="select-night form-group">
    <select class="form-control" :value="night" @change="updateNight">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.select-night {
  display: inline;
  select {
    width: 10%;
    display: inline;
  }
}
</style>
