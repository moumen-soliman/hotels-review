<template>
  <div>
    <img :src="pictures[selectedIndex].photo" />
    <div
      v-for="(key, index) in pictures"
      :key="index"
      :class="{ active: index == selectedIndex }"
    >
      <img :src="key.thumbnail" @click="selectedIndex = index" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  props: {
    pictures: Array
  },
  data() {
    return {
      // Add first image index as a default till user choose image
      selectedIndex: 0
    };
  }
};
</script>
