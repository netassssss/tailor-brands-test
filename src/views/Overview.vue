<template>
  <div class="overview-container"
       :class="{'overview-smaller': !showPagination}">
    <div class="w-full flex justify-between flex-wrap upper-section"
         :class="{'section-smaller': !showPagination}">
      <div v-for="(card, ind) in cards" :key="ind"
           class="card-container">
        <card
          v-if="card"
          :image-data="card[componentNames.headerImages]"
          :headline="card[componentNames.headlines]"
          :subheadline="card[componentNames.subheadlines]"/>
      </div>
    </div>
    <div class="pt-8" v-if="cards && cards.length">
      <pagination
        v-if="showPagination"
        :min-page="minPage"
        :max-page="maxPage"
        :disable-next="disableNext"
        :disable-prev="disablePrev"
        @page="changePage"/>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { init } from '../store/actions';
import { componentNames } from '../services/tableConsts';

import Card from '../components/Card.vue';
import Pagination from '../components/pagination/Pagination.vue';

export default {
  components: {
    Card,
    Pagination,
  },
  mounted() {
    this.$store.dispatch(init);
  },
  computed: {
    ...mapGetters({
      getCards: 'getCards',
      screenSize: 'screenSize',
    }),
    cards() {
      const start = this.currentPage * 6;
      if (this.showPagination) {
        return this.getCards
          .slice(start, start + 6);
      }
      return this.getCards;
    },
    disableNext() {
      return !((this.currentPage + 1) * 6 < this.getCards.length);
    },
    disablePrev() {
      return this.currentPage <= 0;
    },
    showPagination() {
      return this.screenSize >= 768;
    },
  },
  data() {
    const minPage = 0;
    return {
      maxPage: minPage + 2,
      minPage,
      currentPage: minPage,
      componentNames,
    };
  },
  methods: {
    changePage(num) {
      if (num > this.maxPage) this.maxPage = num;
      else if (num < this.minPage) this.minPage = num;
      this.currentPage = num;
    },
  },
};
</script>
<style lang="scss" scoped>
  .overview-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .pagination-container {
      position: absolute;
      bottom: 0;
      top: 0;
      margin-top: 100%;
    }
  }
  .upper-section {
    height: calc(100% - 30px);
  }
  .section-smaller {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .overview-smaller {
    overflow: auto;
    max-height: 100%;
  }
</style>