<template>
  <div class="flex flex-col items-start justify-center shadow card-container">
    <img v-if="imageData" :src="imageData.url" class="image-card"/>
    <div class="pl-5 pr-5">{{ headline }}</div>
    <div class="pl-5 pr-5">{{ subheadline }}</div>
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
    margin-top: 20px;
    padding-bottom: 5px;
  }
  .image-card {
    width: 100%;
    height: 200px;
  }
</style>
