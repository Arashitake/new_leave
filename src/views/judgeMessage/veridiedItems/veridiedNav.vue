<template>
  <div id="veridied-tab">
    <router-link to="/veridiedTip">
      <div class="veridied-title">班级假条审核</div>
    </router-link>
    <router-link to="/classSelectTip">
      <div class="history-msg">班级历史信息</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'veridiedNav',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
#veridied-tab {
  display: flex;

}

.veridied-title, .history-msg {
  margin-right: 20px;
  margin-bottom: 8px;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  border-radius: 20px 0 20px 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  transition: all ease-in-out .3s;
  border: 1px solid #488c76;
}

.veridied-title {
  color: #fff;
  background: #488c76;
}

.veridied-title:hover {
  background: #40b582;
  border: 1px solid #488c76;
}

.history-msg {
  color: #488c76;
  background: #fff;
  border: 1px solid #488c76;
}

.history-msg:hover {
  color: #fff;
  background: #40b582;
}
</style>
