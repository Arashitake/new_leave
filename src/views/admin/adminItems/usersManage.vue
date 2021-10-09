<template>
  <div class="users-manage-outsidebox">
    <el-tabs tab-position="left" style="height: 360px">
      <el-tab-pane label="Student">
        <student-message/>
      </el-tab-pane>
      <el-tab-pane label="Teacher">
        <teacher-message/>
      </el-tab-pane>
      <el-tab-pane label="Admin">
        <admin-message/>
      </el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import studentMessage from './managesItems/studentMessage.vue';
  import teacherMessage from './managesItems/teacherMessage.vue';
  import adminMessage from './managesItems/adminMessage.vue';

  export default {
    name: 'usersManage',
    data() {
      return {

      }
    },
    components: {
      studentMessage,
      teacherMessage,
      adminMessage
    }
  }
</script>

<style scoped>
.users-manage-outsidebox {
  margin-top: 15px;
  height: 360px;
}
</style>
