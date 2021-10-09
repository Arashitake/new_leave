<template>
  <div id="manage-box">
    <el-tabs type="border-card" id="manage-content">
      <el-tab-pane label="用户管理">
        <users-manage/>
      </el-tab-pane>
      <el-tab-pane label="设置审核">

      </el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import usersManage from './adminItems/usersManage.vue'

  export default {
    name: 'managePage',
    data() {
      return {

      }
    },
    components: {
      usersManage
    }
  }
</script>

<style scoped>
#manage-box {
  display: flex;
  width: 100%;
  min-width: 1200px;
  height: 510px;
  justify-content: center;
  align-items: center;
}

#manage-content {
  width: 1200px;
  height: 458px;
  border-radius: 0 50px 0 50px;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
  border: 1px solid #418771;
  overflow: hidden;
}



</style>
