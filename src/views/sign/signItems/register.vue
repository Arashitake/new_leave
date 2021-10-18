<template>
  <div id="registerBox">
    <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="0px" class="ms-content">
      <el-form-item>
        <!-- 账号 -->
        <el-input v-model="registerForm.account" placeholder="学号 / 教师号">
          <el-button slot="prepend" icon="el-icon-user-solid"></el-button>
        </el-input>
        <!-- 姓名 -->
        <el-input v-model="registerForm.name" placeholder="姓名">
          <el-button slot="prepend" icon="el-icon-info"></el-button>
        </el-input>
        <!-- 密码 -->
        <el-input type="password" v-model="registerForm.password" placeholder="密码">
          <el-button slot="prepend" icon="el-icon-s-unfold"></el-button>
        </el-input>
      </el-form-item>
      <div class="identity-choose">
        <span>身份</span>
        <el-radio-group v-model="registerForm.identity">
          <el-radio label="学生"></el-radio>
          <el-radio label="辅导员"></el-radio>
        </el-radio-group>
      </div>

      <div id="register-btn">
        <el-button type="primary" @click="registerSwitch()">注册</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        registerForm: {
          account: '',
          name: '',
          password: '',
          identity: ''
        },
        userToken: '',
        rules: {
          account: [{
            required: true,
            message: "请输入学号",
            trigger: 'blur'
          }],
          name: [{
            required: true,
            message: "请输入姓名",
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
      registerSwitch() {
        let identity = this.registerForm.identity;
        let authority = 0;
        if(identity == '学生') {
          this.postStudentRegister(authority);
          console.log('学生注册');
        } else if (identity == '辅导员') {
          authority = 2;
          this.postTeacherRegister(authority);
        }
      },
      // 学生注册
      postStudentRegister(authority) {
        this.axios({
          method: 'post',
          url: 'api/student/register',
          data: {
            stuAccount: this.registerForm.account,
            stuName: this.registerForm.name,
            stuPwd: this.registerForm.password
          }
        }).then(res => {
          console.log(res);
          this.userToken = {
            account: this.registerForm.account,
            password: this.registerForm.password,
            name: this.registerForm.name,
            Authority: authority
          }

          // 将用户token保存到vuex
          this.$store.commit('login', this.userToken);
          // 页面跳转
          this.$router.push('/Home');
        }).catch(error => {
          console.log(error);
        })
      },
      // 教师注册
      postTeacherRegister(authority) {
        this.axios({
          method: 'post',
          url: 'api/teacher/register',
          data: {
            teaAccount: this.registerForm.account,
            teaName: this.registerForm.name,
            teaPwd: this.registerForm.password,
          }
        }).then(res => {
          console.log(res);
          this.userToken = {
            account: this.registerForm.account,
            password: this.registerForm.password,
            name: this.registerForm.name,
            Authority: authority
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
#registerBox {
  display: flex;
  justify-content: center;
}

/* ------------ 注册信息 ------------- */
.el-form-item {
  width: 350px;
  font-weight: bold;
}

.el-form-item .el-input {
  margin-bottom: 12px;
}

/* 图标 */
.el-form-item .el-button {
  width: 50px;
}

/* -------------- 身份选取 --------------- */
.identity-choose {
  margin-top: -15px;
  margin-bottom: 15px;
}

.identity-choose > span {
  font-size: 14px;
  font-weight: bold;
  color: #418771;
}

/* 身份 */
.identity-choose .el-radio:nth-child(1) {
  margin-left: 50px;
  margin-right: 25px;
}

#register-btn .el-button {
  margin: 5px calc(50% - 100px);
  width: 200px;
  height: 38px;
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

#register-btn .el-button:hover {
  background: #40b682;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
}
</style>
