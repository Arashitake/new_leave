<template>
  <div id="student-manage-box">
    <el-table :data="dataList" style="width: 100%">
      <el-table-column prop="stuId" label="Id" width="50"/>
      <el-table-column prop="stuAccount" label="Account" width="120" />
      <el-table-column prop="stuName" label="Name" width="100" />
      <el-table-column prop="stuSex" label="Sex" width="50" />
      <el-table-column prop="stuCollege" label="College" width="200" />
      <el-table-column prop="stuPro" label="Pro" width="180" />
      <el-table-column prop="stuGrade" label="Grade" width="80" />
      <el-table-column prop="stuType" label="Type" width="120" />
      <el-table-column prop="stuPwd" label="Password" />
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'studentMessage',
    data() {
      return {
        dataList: [],
      }
    },
    mounted() {
      this.getStudentList();
    },
    methods: {
      getStudentList() {
        let that = this;
        this.axios.get("api/student/getAllStudent")
        .then(res => {
          let data = res.data.data;
          that.dataList = data;
        })
      }
    },
    components: {

    }
  }
</script>

<style scoped>
#student-manage-box {
  padding: 0 10px;
}
</style>
