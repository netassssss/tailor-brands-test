<template>
  <div id="app" class="h-full w-full relative"
       :class="{'smaller-screen': screenSize < 768}">
    <top-bar />
    <router-view/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { initScreenUtils } from './store/actions';
import TopBar from './components/TopBar.vue';

export default {
  mounted() {
    this.$store.dispatch(initScreenUtils);
  },
  components: {
    TopBar,
  },
  computed: {
    ...mapGetters({
      screenSize: 'screenSize',
    }),
  },
};

</script>

<style scoped lang="scss">
  .smaller-screen {
    position: relative;
  }
</style>
