<template>
  <div id="homeContent">
    <div id="apply-record">
      <router-link to="">申请记录</router-link>
    </div>
    <div id="apply-write">
      <router-link to="">请假申请</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeContent',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
#homeContent {
  display: flex;
  width: 100%;
  min-width: 800px;
  height: 420px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #f00; */
}

#apply-record, #apply-write {
  width: 200px;
  height: 60px;
  margin: 5px 0;
  line-height: 60px;
  text-align: center;
  border: 1px solid #134482;
}

</style>














