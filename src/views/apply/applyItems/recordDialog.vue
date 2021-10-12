<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true">详&nbsp;&nbsp;&nbsp;情</el-button>
    <el-dialog
      title="请假详细信息"
      :visible.sync="centerDialogVisible"
      width="800px"
      center>
      <!-- 请假内容 -->
      <ul class="record-detail">
        <li>姓名：{{this.$store.state.user.name}}</li>
        <li>学号：{{msg.stuAccount}}</li>
        <li>请假类型：{{this.tipType(msg.typeId)}}</li>
        <li>开始时间：{{new Date(msg.tipStart)}}</li>
        <li>结束时间：{{new Date(msg.tipEnd)}}</li>
        <li>请假原因：{{msg.tipReason}}</li>
        <li></li>
        <li></li>
        <li>审核状态：{{msg.tipVeridied}}</li>
        <li>审批状态：{{msg.tipApprove}}</li>
      </ul>
      <div></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'recordDialog',
    props: {
      msg: {
        type: Object
      }
    },
    data() {
      return {
        centerDialogVisible: false
      }
    },
    methods: {
      // 假条类型切换
      tipType(typeId) {
        let typeStr = '';
        if(typeId == 1) {
          typeStr = '事假';
        } else if (typeId == 2) {
          typeStr = '病假';
        } else if (typeId == 3) {
          typeStr = '工假';
        }
        return typeStr;
      },
    },
    components: {

    }
  }
</script>

<style scoped>
/* ------------- 按钮 ------------- */
.el-button {
  width: 200px;
  height: 36px;
  margin: 0 calc(50% - 100px);
  background: #418771;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(53, 74, 94, 0.15);
  transition: ease-in-out all .2s;
  cursor: pointer;
}

.el-button:hover {
  color: #fff;
  background: #40b682;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
}

.el-button:focus {
  color: #418771;
  font-weight: bold;
}

/* ----------------- 请假细节 record-detail ------------------- */
</style>
