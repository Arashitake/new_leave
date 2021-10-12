<template>
  <div id="class-select-tip-box">
    <veridied-nav></veridied-nav>
    <class-msg-table></class-msg-table>
  </div>
</template>

<script>
  import veridiedNav from './veridiedItems/veridiedNav.vue'
  import classMsgTable from './veridiedItems/classMsgTable.vue'

  export default {
    name: 'classSelectTip',
    data() {
      return {

      }
    },
    components: {
      veridiedNav,
      classMsgTable
    }
  }
</script>

<style scoped>
#class-select-tip-box {
  display: flex;
  width: 100%;
  min-width: 1200px;
  height: 510px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
