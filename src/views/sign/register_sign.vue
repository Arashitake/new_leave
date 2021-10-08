<template>
  <div id="sign-view">
    <div class="outside-box">
      <div class="switch-box">
        <p>NEW LEAVE</p>
        <router-link to="/initHome">
        <div id="to-init-home">initHome</div>
        </router-link>
      </div>
      <!-- v-model="input" -->
      <div class="sign-box">
        <el-input id="sign-id" placeholder="请输入账号" clearable />
        <el-input id="sign-pwd" placeholder="请输入密码" show-password />
        <button>登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
      </div>
    </div>
  </div>
</template>

<script>
import a from '../../assets/image/绿色星空.png'

// import { defineComponent, ref } from 'vue'
// export default defineComponent
  export default {
    name: 'registerSign',
    // setup() {
    //   return {
    //     input: ref(''),
    //   }
    // },
    data() {
      return {

      }
    },
    components: {

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
  /* background-image: url(../../assets/image/绿色星空.png);
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 0 -100px; */
}

.outside-box {
  position: relative;
  width: 500px;
  height: 300px;
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

/* ------------ 注册登录输入内容 -------------- */
.sign-box {
  margin-top: 100px;
}

.el-input {
  display: block;
  margin: 15px calc(50% - 175px);
  width: 350px;
  border-radius: 20px;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
}

.sign-box button {
  margin: 15px calc(50% - 100px);
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  /* background: #3ea57c; #365863*/
  background: #418771;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(53, 74, 94, 0.15);
  transition: ease-in-out all .2s;
  cursor: pointer;
}

.sign-box button:hover {
  background: #40b682;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
}

</style>
