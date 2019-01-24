<template>
  <div>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="post in displayedReviews" :key="post.id">
            {{ post.review }}
            {{ post.score }}
          </div>
        </div>

        <div class="clearfix btn-group col-md-2 offset-md-5">
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
        return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
    }
  },
  computed: {
    // Passing reviews list on paginate
    displayedReviews() {
      return this.paginate(this.reviews.concat().sort(this.sortBy("score")).reverse());
    }
  },
  created() {
    this.setPages();
  }
};
</script>
