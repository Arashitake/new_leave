<template>
  <div id="veridied-tip-box">
    <veridied-nav></veridied-nav>
    <veridied-table></veridied-table>
  </div>
</template>

<script>
  import veridiedNav from './veridiedItems/veridiedNav.vue'
  import veridiedTable from './veridiedItems/veridiedTable.vue';

  export default {
    name: 'veridiedTip',
    data() {
      return {

      }
    },
    components: {
      veridiedNav,
      veridiedTable
    }
  }
</script>

<style scoped>
#veridied-tip-box {
  display: flex;
  width: 100%;
  min-width: 1200px;
  height: 510px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
