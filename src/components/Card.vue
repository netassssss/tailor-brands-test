<template>
  <div class="h-full flex flex-col items-start justify-between shadow card-container">
    <img v-if="imageData" :src="imageData.url" class="image-card"/>
    <div class="mt-5 pl-5 pr-5 text-lg text-item">{{ headline }}</div>
    <div class="mt-5 pl-5 pr-5 text-base text-item">{{ subheadline }}</div>
  </div>
</template>

<script>

export default {
  props: {
    imageData: {
      type: Object,
      default: () => {},
    },
    headline: {
      type: String,
      default: '',
    },
    subheadline: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
  .card-container {
    max-width: 360px;
    .text-item {
      min-height: 30px;
      background: #dedede;
      width: 100%;
    }
  }
  .image-card {
    width: 100%;
    height: 200px;
  }
</style>
