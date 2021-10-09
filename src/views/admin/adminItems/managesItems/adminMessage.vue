<template>
  <div id="admin-manage-box">
    <el-table :data="dataList" style="width: 100%">
      <el-table-column prop="adminId" label="Id" width="50"/>
      <el-table-column prop="adminAccount" label="Account" width="120" />
      <el-table-column prop="adminPwd" label="Password" />
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'adminMessage',
    data() {
      return {
        dataList: [],
      }
    },
    mounted() {
      this.getAdminList();
    },
    methods: {
      getAdminList() {
        let that = this;
        this.axios.get("api/admin/getAdminList")
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
#admin-manage-box {
  padding: 0 10px;
}
</style>
