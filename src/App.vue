<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <home-content></home-content>
  </div>
</template>

<script>
import navBar from './views/homepage/navBar.vue'
import homeContent from './views/homepage/homeContent.vue'

export default {
  name: 'app',
  components: {
    navBar,
    homeContent
  }
}
</script>


<style scoped>

</style>
