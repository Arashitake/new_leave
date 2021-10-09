<template>
  <div class="approve-dialog-box">
    <el-dialog
      title="请假详细信息"
      :visible.sync="dialogVisible"
      :before-close="cancelDialog"
      width="600px"
      center>
      <!-- 请假内容 -->
      <el-form class="form">
        <el-form-item>
          <el-col :span="12">
            <b>学号</b>: {{dialogInfo.stuAccount}}
          </el-col>
          <el-col :span="11">
            <b>请假类型</b>: {{dialogInfo.typeId}}
          </el-col>
        </el-form-item>
        <el-form-item>
          <b>请假原因</b>: {{dialogInfo.tipReason}}
        </el-form-item>
        <el-form-item>
          <el-col :span="12">
            <b>开始时间</b>: {{dialogInfo.tipStart}}
          </el-col>
          <el-col :span="11">
            <b>结束时间</b>: {{dialogInfo.tipEnd}}
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="12">
            <b>是否审核</b>: {{dialogInfo.tipVeridied}}
          </el-col>
          <el-col :span="11">
            <b>是否审批</b>: {{dialogInfo.tipApprove}}
          </el-col>
        </el-form-item>
        <el-form-item>
          <b>审批时间</b>: {{dialogInfo.tipApplytime}}
        </el-form-item>
        <!-- 选取 -->
        <el-form-item>
          <b>审批状态</b>:
          <el-select v-model="approveForm.tipApprove" placeholder="请选择">
            <el-option label="通过" value="1"></el-option>
            <el-option label="不通过" value="-1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="veridiedTip()">修改</el-button>
        <el-button @click="cancelDialog">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'approveDialog',
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      },
      dialogInfo: {
        type: Object
      }
    },
    data() {
      return {
        approveForm: {
          tipApprove: ''
        }
      }
    },
    watch: {
      // 监听弹窗显示，写请求接口
      // dialogVisible(newVal, oldVal) {
      //   if(newVal) {
      //     console.log("新值", newVal);
      //   }
      // }


    },
    methods: {
      // 修改父组件传过来的值
      cancelDialog() {
        this.$emit('update:dialogVisible', false);
      },
      // 修改数据
      veridiedTip() {
        this.axios({
          method: 'post',
          url: 'api/tip/veridiedTip',
          data: {
            tipId: this.dialogInfo.tipId,
            tipApprove: this.approveForm.tipApprove
          },
        }).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error);
        })
        // 完成后关闭界面
        this.cancelDialog()
      }
    },
    components: {
    }
  }
</script>

<style scoped>
.approve-dialog-box .el-form {
  margin-left: 40px;
  width: 560px;
}

.el-form-item {
  margin: 0;
}

b {
 margin-right: 5px;
}

.approve-dialog-box .el-button {
  width: 100px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(53, 74, 94, 0.15);
  transition: ease-in-out all .2s;
  cursor: pointer;
}

.approve-dialog-box .el-button:nth-child(1) {
  background: #418771;
  color: #fff;
}

.approve-dialog-box .el-button:nth-child(1):hover {
  color: #fff;
  background: #40b682;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
}

</style>
