<template>
  <div id="sign-view">
    <div class="outside-box">
      <div class="switch-box">
        <p>NEW LEAVE</p>
        <router-link to="/initHome">
        <div id="to-init-home">initHome</div>
        </router-link>
      </div>
      <!-- 登录注册切换 -->
      <el-tabs tab-position="top">
        <el-tab-pane label="登录">
          <login/>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <register/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import login from './signItems/login.vue';
  import register from './signItems/register.vue';

  export default {
    name: 'registerSign',
    data() {
      return {

      }
    },
    components: {
      login,
      register
    }
  }
</script>

<style scoped>
#sign-view {
  display: flex;
  width: 100%;
  min-width: 1200px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(65, 135, 113, 0.6);
}

.outside-box {
  position: relative;
  width: 500px;
  height: 360px;
  border-radius: 5px;
  border: 1px solid #34485d;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
  background: #fff;
}

/* -------------- 切换登录注册的表单 ---------------- */
.switch-box {
  position: absolute;
  top: -50px;
  left: calc(50% - 125px);
  width: 250px;
  height: 100px;
  text-align: center;
  border-radius: 50%;
  background: #418771;
  border: 1px solid #34485d;
}

.switch-box > p {
  padding: 30px 0 10px 0;
  font-size: 30px;
}

/* 返回未登录时的主页 */
#to-init-home {
  margin: 0 calc(50% - 50px);
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #fff;
  border-radius: 50% 50% 0 0;
  border: 1px solid #418771;
}

/* -------------- 登录注册切换 ----------------- */
.outside-box .el-tabs {
  margin-top: 30px;
  padding: 20px;
  width: 500px;
  height: 320px;
}

</style>
