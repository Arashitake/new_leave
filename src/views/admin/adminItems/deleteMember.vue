<template>
  <div id="delete-member-box">
    <el-form class="set-audit-box">
      <el-form-item label="删除用户（input Id）：">
        <el-input v-model="input" type="text" style="margin-left: 10px"></el-input>
      </el-form-item>
      <el-button type="danger" @click="checkStudentInfo()">删除用户</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'deleteMember',
    data() {
      return {
        input: ''
      }
    },
    methods: {
      checkStudentInfo() {
        this.axios({
          method: 'post',
          url: "api/student/checkStudentInfo",
          data: {
            stuId: parseInt(this.input)
          }
        })
        .then(res => {
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
#delete-member-box {
  display: flex;
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
