<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Know Your Courts</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="product-large set-bg">
            <h2>Top Courts</h2>
            <a href="#all-lawyers">Discover More</a>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1">
          <a-tabs :default-active-key="courts[0]" class="filter-control">
            <a-tab-pane :tab="court" v-for="court of courts" :key="court">
              <div class="row">
                <div
                  v-for="advocate of visibleItems"
                  :key="advocate"
                  class="col-sm-12 col-md-4"
                >
                <card-profile></card-profile>
                </div>
              </div>
              <div class="loading-more"  @click="loadMore" v-if="canLoadMore">
              <i class="icon_loading"></i>
              <span> Loading More </span>
            </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import CardProfile from "../Cards/CardProfile.vue";
import Pagination from "../Widgets/Pagination.vue";
export default {
  props: ["advocates"],
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6],
      currentPage: 1,
      itemsPerPage:4,
      visibleItems: [],
      numVisibleItems: 3
    };
  },
  components: { CardProfile, Pagination },
  computed: {
    ...mapState(["practiseAreas", "courts"]),
    canLoadMore() {
      return this.numVisibleItems < this.practiseAreas.length;
    }
  },
  methods: {
    handleChange(current) {
    },
    onPageChange(page) {
      this.currentPage = page;
    },
    loadMore() {
      this.numVisibleItems += 3;
      this.updateVisibleItems();
    },
    updateVisibleItems() {
      this.visibleItems = this.practiseAreas.slice(0,this.numVisibleItems);
    }
  },
  created() {
    this.updateVisibleItems();

  }
};
</script>

<style></style>
