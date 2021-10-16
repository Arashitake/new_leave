<template>
  <div class="person-center-box">
    <div class="message-box">
      <el-tabs
        tab-position="left"
        @tab-click="handleClick"
        style="height: 320px;">
        <el-tab-pane label="个人信息">
          <modify-info :personInfo="personInfo"/>
        </el-tab-pane>
        <el-tab-pane label="修改密码">
          <modify-password/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import personInfo from './infoItems/personInfo.vue';
  import modifyInfo from './infoItems/modifyInfo.vue';
  import modifyPassword from './infoItems/modifyPassword.vue';

  export default {
    name: 'personalCenter',
    data() {
      return {
        personInfo: [],
      }
    },
    computed: {
      // return
    },
    mounted() {
      let authority = this.$store.state.user.Authority;
      if(authority < 2) {
        this.getStuPersonMessage();
      } else if (authority == 2) {
        this.getTeaPersonMessage();
      }
    },
    methods: {
      // 获取学生个人信息
      getStuPersonMessage() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/student/login',
          data: {
            stuAccount: this.$store.state.user.account,
            stuPwd: this.$store.state.user.password
          }
        }).then(res => {
          // console.log(res);
          that.personInfo = res.data.student;
        }).catch(error => {
          console.log(error);
        })
      },
      // 获取教师个人信息
      getTeaPersonMessage() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/teacher/login',
          data: {
            teaAccount: this.$store.state.user.account,
            teaPwd: this.$store.state.user.password
          }
        }).then(res => {
          // console.log(res);
          that.personInfo = res.data.teacher;
        }).catch(error => {
          console.log(error);
        })
      },
      handleClick() {

      }
    },
    components: {
      personInfo,
      modifyInfo,
      modifyPassword
    }
  }
</script>

<style scoped>
.person-center-box {
  display: flex;
  width: 100%;
  min-width: 1200px;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
}

.message-box {
  padding: 40px 30px 0 0;
  width: 800px;
  height: 400px;
  border-radius: 50px 0 50px 0;
  border: 1px solid #418771;
  box-shadow: 4px 4px 5px rgba(53, 74, 94, 0.15);
}


</style>
