<template>
  <div class="person-center-box">
    <div class="message-box">
      <el-tabs
        tab-position="left"
        @tab-click="handleClick"
        style="height: 320px;">
        <el-tab-pane label="个人信息">
          <person-info :personInfo="personInfo"/>
        </el-tab-pane>
        <el-tab-pane label="修改信息">
          <modify-info :personInfo="personInfo"/>
        </el-tab-pane>
        <el-tab-pane label="Config">

        </el-tab-pane>
        <el-tab-pane label="Role">

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import personInfo from './infoItems/personInfo.vue';
  import modifyInfo from './infoItems/modifyInfo.vue';

  export default {
    name: 'personalCenter',
    data() {
      return {
        personInfo: []
      }
    },
    computed: {
      // return
    },
    mounted() {
      this.getPersonMessage()
    },
    methods: {
      // 获取个人信息
      getPersonMessage() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/student/login',
          data: {
            stuAccount: this.$store.state.user.account,
            stuPwd: this.$store.state.user.password
          }
        }).then(res => {
          that.personInfo = res.data.student;
        }).catch(error => {
          console.log(error);
        })
      },
      handleClick() {

      }
    },
    components: {
      personInfo,
      modifyInfo
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
