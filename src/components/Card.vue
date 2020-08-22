<template>
  <div class="h-full flex flex-col items-start justify-between shadow max-w-360">
    <img v-if="imageData" :src="imageData.url" class="w-full h-200"/>
    <div class="mt-5 m-special10 p-special5
    w-special10 text-lg min-h-30 bg-cardItem">{{ headline }}</div>
    <div class="mt-5 m-special10 p-special5
    w-special10 text-base min-h-30 bg-cardItem">{{ subheadline }}</div>
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
