<template>
  <div id="modify-pwd-box">
    <div>
      <span>请输入旧密码:</span>
      <el-input placeholder="请输入旧密码" v-model="pwdForm.oldPwd" clearable></el-input>
    </div>
    <div>
      <span>请输入新密码:</span>
      <el-input placeholder="请输入新密码" v-model="pwdForm.newPwd" clearable></el-input>
    </div>
    <div>
      <span>再次输入新密码:</span>
      <el-input placeholder="请再次输入新密码" v-model="pwdForm.reNewPwd" clearable></el-input>
    </div>
    <el-button type="primary">提交修改</el-button>
  </div>
</template>

<script>
  export default {
    name: 'modifyPassword',
    data() {
      return {
        pwdForm: {
          oldPwd: '',
          newPwd: '',
          reNewPwd: ''
        }
      }
    },
    computed: {
      // 判断密码
      judgePwd() {
        if(this.pwdForm.newPwd != this.pwdForm.reNewPwd) {
          return '再次输入的新密码';
        }
      },
    },
    methods: {
      // 修改密码
      modifyPwd() {
        this.axios({
          method: 'post',
          url: 'api/student/changeStudentPwdByAccount',
          data: {
            stuAccount: this.$store.state.user.account,
            stuPwd: this.pwdForm.newPwd
          }
        }).then(res => {
          console.log(res);
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
#modify-pwd-box {
  margin: 50px auto;
  width: 550px;
}

#modify-pwd-box > div {
  margin-bottom: 20px;
}

#modify-pwd-box span {
  margin-right: 20px;
  color: #488c76;
  font-weight: bold;
}

#modify-pwd-box .el-input {
  width: 400px;
}


/* ------------- 按钮 ---------------- */
#modify-pwd-box .el-button {
  margin: 20px calc(50% - 90px) 0;
  width: 150px;
  background: #488c76;
  transition: all ease-in-out .3s;
  border: 1px solid #488c76;
}

#modify-pwd-box .el-button:hover {
  background: #40b682;
}
</style>
