<template>
  <div id="app">
    <div id="nav-bar-box">
      <nav-bar v-if="!$route.meta.showNav"></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import navBar from './views/homepage/navBar.vue'

export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>


<style>
  @import "./assets/css/base.css";
</style>
