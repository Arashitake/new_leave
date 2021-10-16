<template>
  <div class="sign-box">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px" class="ms-content">
      <el-form-item prop="loginName">
        <el-input v-model="loginForm.loginName" placeholder="学号 / 教师号 / 管理员账号">
          <el-button slot="prepend" icon="el-icon-user-solid"></el-button>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="密码">
          <el-button slot="prepend" icon="el-icon-s-unfold"></el-button>
        </el-input>
      </el-form-item>

      <el-form-item class="identity-choose" label="">
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
</template>

<script>
  export default {
    name: 'login',
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
          // console.log(res);
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
.el-form-item {
  font-weight: bold;
}

.el-form-item .el-radio:nth-child(1) {
  margin-left: 50px;
}
/* 图标 */
.el-form-item .el-button {
  width: 50px;
}

/* ------------ 注册登录输入内容 -------------- */
.sign-box {
  width: 350px;
  margin: 20px calc(50% - 175px) 0;
}

/* 身份按钮 */
.identity-choose {
  margin-top: -10px;
  width: 400px;
  height: 30px;
}

#login-btn .el-button {
  margin: 0 calc(50% - 100px);
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
