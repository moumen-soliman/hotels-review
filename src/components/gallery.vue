<template>
  <div class="gallery">
    <div class="row">
      <div class="col-12 gallery__main-image">
        <img :src="pictures[selectedIndex].photo" />
      </div>
    </div>
    <div class="wrap">
      <div
        v-for="(key, index) in pictures"
        :key="index"
        :class="{ active: index == selectedIndex }"
      >
        <div>
          <img :src="key.thumbnail" @click="selectedIndex = index" />
        </div>
      </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.gallery {
  &__main-image {
    img {
      width: 40%;
    }
  }
  .wrap {
    white-space: nowrap;
    border: 0;
    overflow-x: scroll;
    max-width: 50%;
    margin: 20px auto;
    /* width */
    &::-webkit-scrollbar {
      height: 6pt;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #aaaab2;
      border-radius: 50px;
      &:hover {
        background: inherit;
      }
    }
    div {
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 5px;
      img {
        opacity: 0.5;
        border-radius: 5px;
        cursor: pointer;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover,
      &.active {
        img {
          opacity: 1;
        }
      }
    }
  }
}
</style>
