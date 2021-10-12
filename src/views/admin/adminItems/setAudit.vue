<template>
  <div class="audit-outsidebox">
    <el-form class="set-audit-box">
      <el-form-item label="设置请假管理员权限（input Id）：">
        <el-input v-model="input" type="text" style="margin-left: 10px"></el-input>
      </el-form-item>
      <el-button type="warning" @click="changeStudentType()">设置权限</el-button>
    </el-form>

    <el-form class="set-audit-box">
      <el-form-item label="设置管理员（input account）：">
        <el-input v-model="input" type="text" style="margin-left: 10px"></el-input>
      </el-form-item>
      <el-button type="primary" @click="changeStudentType()">设置 ADMIN</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'setAudit',
    data() {
      return {
        input: ''
      }
    },
    mounted() {
      this.changeStudentType()
    },
    methods: {
      changeStudentType() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/student/changeStudentType',
          data: {
            stuId: this.input
          },
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
#audit-outsidebox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.set-audit-box {
  position: relative;
  padding: 10px;
  width: 680px;
  height: 68px;
}

.set-audit-box .el-input {
  width: 300px;
}

.set-audit-box .el-form-item {
  font-weight: bold;
}

.set-audit-box .el-button {
  position: absolute;
  top: 10px;
  right: 0;
}
</style>
