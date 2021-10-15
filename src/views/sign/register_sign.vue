<template>
  <div id="sign-view">
    <div class="outside-box">
      <div class="switch-box">
        <p>NEW LEAVE</p>
        <router-link to="/initHome">
        <div id="to-init-home">initHome</div>
        </router-link>
      </div>
      <div class="sign-box">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px" class="ms-content">
          <el-form-item prop="loginName">
            <el-input v-model="loginForm.loginName" placeholder="用户名">
              <el-button slot="prepend" icon="icon-d-wo"></el-button>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="密码">
              <el-button slot="prepend" icon="icon-d-yuechi"></el-button>
            </el-input>
          </el-form-item>

          <el-form-item id="identity-choose" label="">
            <el-radio-group v-model="loginForm.identity" >
              <el-radio label="学生"></el-radio>
              <el-radio label="辅导员"></el-radio>
              <el-radio label="管理员"></el-radio>
            </el-radio-group>
          </el-form-item>

          <div id="login-btn">
            <el-button type="primary" @click="login">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'registerSign',
    data() {
      return {
        loginForm: {
          loginName: '',
          password: '',
          identity: ''
        },
        userToken: '',
        rules: {
          loginName: [{
            required: true,
            message: "请输入学号",
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: "请输入密码",
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      login() {
        let identity = this.loginForm.identity;
        if(identity == '学生') {
          this.postStudentLogin('student');
        } else if (identity == '辅导员') {
          this.postTeacherLogin('teacher');
        } else if (identity == '管理员') {
          this.postAdminLogin('admin');
        }
      },
      postAdminLogin(idStr) {
        this.axios({
          method: 'post',
          url: 'api/'+idStr+'/login',
          data: {
            adminAccount: this.loginForm.loginName,
            adminPwd: this.loginForm.password
          },
          headers: {
            'Content-type':'application/json'
          },
        }).then(res => {
          console.log(res);
          this.userToken = {
            account: res.data.admin.adminAccount,
            password: res.data.admin.adminPwd,
            name: 'ADMIN',
            Authority: 3
          }

          // 将用户token保存到vuex
          this.$store.commit('login', this.userToken);
          // 页面跳转
          this.$router.push('/Home');
        }).catch(error => {
          console.log(error);
        })
      },
      postTeacherLogin(idStr) {
        this.axios({
          method: 'post',
          url: 'api/'+idStr+'/login',
          data: {
            teaAccount: this.loginForm.loginName,
            teaPwd: this.loginForm.password
          },
          headers: {
            'Content-type':'application/json'
          },
        }).then(res => {
          console.log(res);
          this.userToken = {
            account: res.data.teacher.teaAccount,
            password: res.data.teacher.teaPwd,
            name: res.data.teacher.teaName,
            Authority: 2
          }

          // 将用户token保存到vuex
          this.$store.commit('login', this.userToken);
          // 页面跳转
          this.$router.push('/Home');
        }).catch(error => {
          console.log(error);
        })
      },
      postStudentLogin(idStr) {
        this.axios({
          method: 'post',
          url: 'api/'+idStr+'/login',
          data: {
            stuAccount: this.loginForm.loginName,
            stuPwd: this.loginForm.password
          },
          headers: {
            'Content-type':'application/json'
          },
        }).then(res => {
          console.log(res);
          this.userToken = {
            account: res.data.student.stuAccount,
            password: res.data.student.stuPwd,
            name: res.data.student.stuName,
            Authority: (res.data.student.stuType == "普通学生"? 0 : 1)
          }

          // 将用户token保存到vuex
          this.$store.commit('login', this.userToken);
          // 页面跳转
          this.$router.push('/Home');
        }).catch(error => {
          console.log(error);
        })
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

.el-form-item {
  font-weight: bold;
}

.el-form-item .el-radio:nth-child(1) {
  margin-left: 50px;
}

/* ------------ 注册登录输入内容 -------------- */
.sign-box {
  width: 350px;
  margin: 100px calc(50% - 175px) 0;
}

/* 身份按钮 */
#identity-choose {
  width: 400px;
  height: 30px;
}

#login-btn .el-button {
  margin: 15px calc(50% - 100px);
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  background: #418771;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(53, 74, 94, 0.15);
  transition: ease-in-out all .2s;
  cursor: pointer;
}

#login-btn .el-button:hover {
  background: #40b682;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
}

</style>
