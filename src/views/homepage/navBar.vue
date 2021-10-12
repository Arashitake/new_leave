<template>
  <div id="navBar">
    <div id="to-home">
      <router-link to="/Home" id="toHomeBtn">Home</router-link>
      <router-link to="/managePage" id="toManageBtn" v-show="this.getAuthority == 3">管理页</router-link>
    </div>

    <!-- <div id="to-apply"></div> -->
    <div class="person-box">
      <!-- 用是否登录来判断显示 -->

      <router-link v-show="isLogin == null || isLogin == ''" to="/registerSign">
        <div id="sign-btn">注册/登录</div>
      </router-link>
      <div v-show="isLogin != null && isLogin != ''">
        <!-- <div id="person"></div> -->
        <el-dropdown id="person-btn">
          <span class="el-dropdown-link">
            {{this.showName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/personalCenter">个人中心</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="logout()">退出登录</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </div>

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
    computed: {
      isLogin() {
        return this.$store.state.user;
      },
      showName() {
        return this.$store.state.user ? this.$store.state.user.name : '';
      },
      getAuthority() {
        return this.$store.state.user ? this.$store.state.user.Authority : '';
      }
    },
    methods: {
      logout() {  // 退出登录
        this.$store.commit('logout');
        this.$router.push('/initHome');
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
  line-height: 60px;
}

/* --------------- 登录注册头像 ---------------- */
.person-box {
  position: absolute;
  display: flex;
  height: 50px;
  top: 5px;
  right: 80px;
  background: #fff;
  border-radius: 0 25px 0 25px;
  border: 1px solid#e6e6e6;
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

/* ------------------- 下拉框 ---------------------- */
.el-dropdown-link {
  color: #000;
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}

/* -------------- 跳转到主页 ------------------ */
#toHomeBtn {
  margin-left: 20px;
  padding: 12px 15px;
  color: #fff;
  font-style:oblique;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px #34485d;
}

/* ------------ 管理页面 --------------- */
#toManageBtn {
  padding: 12px 15px;
  color: #fff;
  font-style: italic;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px #34485d;
}
</style>
