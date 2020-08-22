<template>
  <div class="flex items-center cursor-pointer" v-if="minPage <= maxPage">
    <div class="page-item page-bg flex items-center justify-center"
         :class="{'page-disabled': disablePrev}"
         @click="prev">
      <div class="arrow-left bg-page"></div>
    </div>
    <div class="page-item flex items-center justify-center"
         :class="{'selected-page': currentPage === minPage}"
         v-on:click="changePage(minPage)">
      <div>{{ minPage + 1 }}</div>
    </div>
    <div class="page-item flex items-center justify-center"
         :class="{'selected-page': currentPage === minPage + 1}"
         v-on:click="changePage(minPage + 1)">
      <div>{{ minPage + 2 }}</div>
    </div>
    <div class="page-item flex items-center justify-center"
         :class="{'selected-page': currentPage === minPage + 2}"
         v-on:click="changePage(minPage + 2)">
      <div>{{ minPage + 3 }}</div>
    </div>
    <div class="page-item page-bg flex items-center justify-center"
         :class="{'page-disabled': disableNext}"
         @click="next">
      <div class="arrow-right bg-page"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    minPage: {
      type: Number,
      default: 0,
    },
    maxPage: {
      type: Number,
      default: 3,
    },
    disableNext: {
      type: Boolean,
      default: false,
    },
    disablePrev: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: 0,
    };
  },
  methods: {
    sendPage() {
      this.$emit('page', this.currentPage);
    },
    next() {
      if (this.disableNext) return;
      if (this.currentPage < this.maxPage) this.currentPage += 1;
      this.sendPage();
    },
    prev() {
      if (this.disablePrev) return;
      if (this.currentPage > 0) this.currentPage -= 1;
      this.sendPage();
    },
    changePage(page) {
      this.currentPage = page;
      this.sendPage();
    },
  },
};
</script>

<style scoped lang="scss">
  .page-item {
    width: 20px;
    height: 20px;
    border: 1px solid #dedede;
    color: #bdbdbd;
  }
  .page-bg {
    background: #dedede;
  }
  .arrow-right {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-left: 8px solid #000;
  }

  .arrow-left {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-right: 8px solid #000;
  }

  .page-disabled {
    opacity: 0.4;
    cursor: default;
  }
  .selected-page {
    color: #000;
  }
</style>
