<template>
  <div id="teacher-manage-box">
    <el-table :data="dataList" style="width: 100%">
      <el-table-column prop="teaId" label="Id" width="50"/>
      <el-table-column prop="teaAccount" label="Account" width="120" />
      <el-table-column prop="teaName" label="Name" width="100" />
      <el-table-column prop="teaSex" label="Sex" width="50" />
      <el-table-column prop="teaCollege" label="College" width="200" />
      <el-table-column prop="teaMgrade" label="Grade" width="80" />
      <el-table-column prop="teaPwd" label="Password" />
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'teacherMessage',
    data() {
      return {
        dataList: [],
      }
    },
    mounted() {
      this.getTeacherList();
    },
    methods: {
      getTeacherList() {
        let that = this;
        this.axios.get("api/teacher/getAllTeacher")
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
#teacher-manage-box {
  padding: 0 10px;
}
</style>
