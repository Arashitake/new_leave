<template>
  <div id="navBar">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <div id="person"></div>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
#navBar {
  position: relative;
  width: 100%;
  min-width: 1250px;
  height: 60px;
  background-color: #134482;
  /* line-height: 60px; */
}

#person {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 5px;
  right: 60px;
  border-radius: 50%;
  background: #fff;
  /* border: 1px solid #000; */
}
</style>
