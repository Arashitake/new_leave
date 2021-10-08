<template>
  <div id="navBar">
    <div id="to-home">
      <router-link to="/Home">Home</router-link>
    </div>
    <!-- <div id="to-apply"></div> -->
    <div class="person-box">
      <!-- 用是否登录来判断显示 -->
      <div id="person"></div>
      <router-link v-if="" to="/registerSign">
        <div id="sign-btn">注册/登录</div>
      </router-link>
      <router-link v-if="" to="/personalCenter">
        <div id="person-btn">个人中心</div>
      </router-link>
    </div>

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
  background-color: #488c76;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
  /* line-height: 60px; */
}

#to-home {
  line-height: 50px;
}

/* --------------- 登录注册头像 ---------------- */
.person-box {
  position: absolute;
  display: flex;
  top: 5px;
  right: 80px;
}

#person {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
}

.person-box #sign-btn,
.person-box #person-btn {
  padding: 0 10px;
  line-height: 50px;
  font-size: 17px;
  /* color: #35495e; */
  /* color: #134482; */
}
</style>
