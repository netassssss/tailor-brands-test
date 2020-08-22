<template>
  <div class="flex flex-col items-center justify-center shadow card-container">
    <img v-if="imageData" :src="imageData.url" class="image-card"/>
    <div>{{ headline }}</div>
    <div>{{ subheadline }}</div>
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
  }
  .image-card {
    width: 100%;
    height: 200px;
  }
</style>
