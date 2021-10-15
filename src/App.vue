<template>
  <div id="app">
    <div id="nav-bar-box">
      <nav-bar v-if="!$route.meta.showNav"></nav-bar>
    </div>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
import navBar from './views/homepage/navBar.vue'

export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      })
    }
  },
  components: {
    navBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
