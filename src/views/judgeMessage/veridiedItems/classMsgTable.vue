<template>
  <div id="class-msg-table">
    <el-table :data="dataList" style="width: 100%" height="368">
      <el-table-column fixed prop="tipId" label="Id" width="40" />
      <el-table-column fixed prop="stuAccount" label="学号" width="100" />
      <el-table-column prop="typeId" label="请假类型" width="120" />
      <el-table-column prop="tipReason" label="请假原因" width="250" />
      <el-table-column prop="tipStart" label="开始时间" width="150" />
      <el-table-column prop="tipEnd" label="结束时间" width="150" />
      <el-table-column prop="tipVeridied" label="是否审核" width="100" />
      <el-table-column prop="tipApprove" label="是否审批" width="100" />
      <el-table-column prop="tipApplytime" label="审批时间" width="200" />
      <!-- <el-table-column fixed="right" label="审核" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <!-- <approve-dialog :dialogVisible="dialogVisible" :dialogInfo="dialogInfo" @update:dialogVisible="dialogVisibles"></approve-dialog> -->
  </div>
</template>

<script>
  export default {
    name: 'classMsgTable',
    data() {
      return {
        dataList: []
      }
    },
    mounted() {
      this.getTipByClass();
    },
    methods: {
      // 2、获取班级的历史请假信息
      getTipByClass() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/getTipByClass',
          data: {
            stuAccount: this.$store.state.user.account
          },
        }).then(res => {
          // console.log(res);
          that.dataList = res.data.data;
        }).catch(error => {
          console.log(error);
        })
      },
    },
    components: {

    }
  }
</script>

<style scoped>
#class-msg-table {
  padding: 10px;
  width: 960px;
  height: 400px;
  border-radius: 20px 0 20px 0;
  border: 1px solid #488c76;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  /* background: rgba(72, 140, 118, .5); */
}
</style>
