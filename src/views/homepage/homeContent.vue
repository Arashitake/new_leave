<template>
  <div id="homeContent">
  <!-- 普通学生&副班 -->
    <router-link to="/applyRecord">
      <div class="jump-router" v-show="this.getAuthority <= 1">申请记录</div>
    </router-link>
    <router-link to="/applyWrite">
      <div class="jump-router" v-show="this.getAuthority <= 1">请假申请</div>
    </router-link>
  <!-- 副班 -->
    <router-link to="/veridiedTip">
      <div class="jump-router" v-show="this.getAuthority == 1">请假审核</div>
    </router-link>
  <!-- 辅导员&管理员 -->
    <router-link to="/approveTip">
      <div class="jump-router" v-show="this.getAuthority >= 2">请假审批</div>
    </router-link>
  </div>
</template>

<script>
  import navBar from '../homepage/navBar.vue'

  export default {
    name: 'homeContent',
    data() {
      return {

      }
    },
    computed: {
      getAuthority() {
        return this.$store.state.user ? this.$store.state.user.Authority : '';
      }
    },
    components: {
      navBar
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

.jump-router {
  width: 200px;
  height: 60px;
  margin: 5px 0;
  line-height: 60px;
  text-align: center;
  letter-spacing: 3px;
  font-size: 18px;
  color: #fff;
  background: #488c76;
  border: 1px solid #134482;
  box-shadow: .1px .1px .1px #000;
  transition: all ease-in-out .2s;
}

.jump-router:hover {
  color: #34475d;
  box-shadow: .1px .1px .1px #000;
  background: #fff;
}

</style>














