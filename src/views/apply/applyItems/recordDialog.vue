<template>
  <div id="record-dialog-box">
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
        <li>开始时间：{{new Date(msg.tipStart - 28800000).toLocaleString()}}</li>
        <li>结束时间：{{new Date(msg.tipEnd - 28800000).toLocaleString()}}</li>
        <li>请假原因：{{msg.tipReason}}</li>
        <li></li>
        <li></li>
        <li>审核状态：{{msg.tipVeridied == 0 ? "未审核" : (msg.tipVeridied == 1 ? "审核通过" : "审核不通过")}}</li>
        <li>审批状态：{{msg.tipApprove == 0 ? "未审批" : (msg.tipApprove == 1 ? "审批通过" : "审批不通过")}}</li>
        <li>审批时间：{{msg.tipApplytime == null ? "-" : new Date(msg.tipApplytime - 28800000).toLocaleString()}}</li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" v-show="msg.tipVeridied == -1" @click="appealTip()">申 诉</el-button>
        <el-button id="recall-btn" v-show="msg.tipVeridied == 0 && msg.tipApprove == 0" type="warning" @click="recallTip()">撤 回</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'recordDialog',
    inject: ['reload'],
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
      // 学生申诉请假信息
      appealTip() {
        this.axios({
          method: 'post',
          url: 'api/tip/appeal',
          data: {
            tipId: this.msg.tipId
          }
        }).then(res => {
          this.reload();    // 刷新页面
          this.centerDialogVisible = false; // 申诉后退出窗口
        }).catch(error => {
          console.log(error);
        })
      },
      // 学生撤回请假信息
      recallTip() {
        this.axios({
          method: 'post',
          url: 'api/tip/recallTip',
          data: {
            tipId: this.msg.tipId
          }
        }).then(res => {
          this.reload();    // 刷新页面
          this.centerDialogVisible = false; // 申诉后退出窗口
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
#record-dialog-box > .el-button {
  margin: 0 calc(50% - 100px);
}

.dialog-footer {
  display: flex;
  height: 50px;
  justify-content: center;
}

/* ------------- 按钮 ------------- */
.el-button {
  width: 200px;
  height: 36px;
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

#record-dialog-box > .el-button:focus {
  color: #418771;
  font-weight: bold;
}

/* ---------------- 撤回请假信息 -------------------- */
#recall-btn {
  background: #dd5044;
  }

#recall-btn:hover {
  background: #f54a3b;
}
</style>
