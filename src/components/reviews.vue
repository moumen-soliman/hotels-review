<template>
  <div>
    <div class="reviews col-8">
      <h3 class="text-left">Reviews</h3>
      <div class="reviews__container">
        <div v-for="post in displayedReviews" :key="post.id">
          <div class="row text-left">
            <div class="col-1">
              <span>{{ post.score }}</span>
            </div>
            <div class="col-11">
              <p>{{ post.review }}</p>
            </div>
          </div>
        </div>
        <br />
        <div class="col-12">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            v-if="page != 1"
            @click="page--"
          >
            &laquo;
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            v-for="pageNumber in pages.slice(page - 1, page + 5)"
            @click="page = pageNumber"
            :key="pageNumber"
          >
            {{ pageNumber }}
          </button>
          <button
            type="button"
            @click="page++"
            v-if="page < pages.length"
            class="btn btn-sm btn-outline-secondary"
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reviews",
  props: {
    reviews: Array
  },
  data() {
    return {
      page: 1,
      perPage: 3,
      pages: []
    };
  },
  methods: {
    /*
     * Push number of pages by get the value from divided length of reviews,
     * and number of divs I choose to show on perPage, then push the index into,
     * pages data to count number of index in array and get number of pages.
    .*/
    setPages() {
      let numberOfPages = Math.ceil(this.reviews.length / this.perPage);
      for (var index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    // Slice before & afters choosen divs to display
    paginate(reviews) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return reviews.slice(from, to);
    },
    // Sort reviews based on score (from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby)
    sortBy(key) {
      return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
    }
  },
  computed: {
    // Passing reviews list on paginate
    displayedReviews() {
      return this.paginate(
        this.reviews
          .concat()
          .sort(this.sortBy("score"))
          .reverse()
      );
    }
  },
  created() {
    this.setPages();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.reviews {
  margin: 5px auto;
  &__container {
    padding: 0 16px 16px;
    border: 1px solid $gray;
    padding-top: 0;
    .row {
      padding: 10px;
      background: $white;
      border-bottom: 1px solid $gray;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
      div:first-child {
        position: relative;
        height: 56px;
        border-radius: 50%;
        border: 1px solid $gray;
        span {
          position: absolute;
          text-align: center;
          top: 30%;
          right: 0;
          left: 0;
        }
      }
    }
  }
}
</style>
