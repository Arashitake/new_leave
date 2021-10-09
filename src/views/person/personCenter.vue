<template>
  <div class="person-center-box">
    <div class="message-box">
      <el-tabs
        tab-position="left"
        @tab-click="handleClick"
        style="height: 320px;">
        <el-tab-pane label="个人信息">
          <div id="person-message">
            <ul>
              <li>
                <span>姓名：</span>{{personMsg.name}}
                </li>
              <li>
                <span>学号：</span>{{personMsg.account}}
                </li>
              <li>
                <span>性别：</span>
                </li>
              <li>
                <span>学院：</span>
                </li>
              <li>
                <span>专业：</span>
                </li>
              <li>
                <span>年级：</span>
                </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修改信息"></el-tab-pane>
        <el-tab-pane label="Config">

        </el-tab-pane>
        <el-tab-pane label="Role">

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personalCenter',
    data() {
      return {
        personMsg: this.$store.state.user
      }
    },
    computed: {
      // return
    },
    methods: {
      handleClick() {

      }
    },
    components: {

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

/* ------------------ 内容 ----------------- */
/* 1、个人信息 */
#person-message {
  position: relative;
  width: inherit;
  height: 320px;
}

ul > li {
  margin: 10px 40px;
  height: 35px;
}

ul > li span {
  font-weight: bold;
  color: #488c76;
}
</style>
