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
            <b>请假类型</b>: {{this.tipType(dialogInfo.typeId)}}
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
        <!-- 辅导员审批 -->
        <el-form-item v-show="this.getAuthority >= 2">
          <b>审批状态</b>:
          <el-select v-model="approveForm.tipApprove" placeholder="请选择">
            <el-option label="通过" value="1"></el-option>
            <el-option label="不通过" value="-1"></el-option>
          </el-select>
        </el-form-item>
        <!-- 副班审查 -->
        <el-form-item v-show="this.getAuthority >= 1 && this.getAuthority != 2">
          <b>审查状态</b>:
          <el-select v-model="approveForm.tipVeridied" placeholder="请选择">
            <el-option label="通过" value="1"></el-option>
            <el-option label="不通过" value="-1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="modifyStatus()">修改</el-button>
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
          tipApprove: '',
          tipVeridied: ''
        }
      }
    },
    computed: {
      getAuthority() {
        return this.$store.state.user ? this.$store.state.user.Authority : '';
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
      // 修改父组件传过来的值
      cancelDialog() {
        this.$emit('update:dialogVisible', false);
      },
      modifyStatus() {
        let authority = this.$store.state.user.Authority;    // 权限等级
        if(authority == 1) {
          this.veridiedTip();
        } else if (authority == 2) {
          this.applyTip();
        }
        // 完成后关闭界面
        this.cancelDialog();
      },
      // 副班审核
      veridiedTip() {
        this.axios({
          method: 'post',
          url: 'api/tip/veridiedTip',
          data: {
            tipId: this.dialogInfo.tipId,
            tipVeridied: this.approveForm.tipVeridied
          },
        }).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error);
        })
      },
      // 辅导员审批
      applyTip() {
        this.axios({
          method: 'post',
          url: 'api/tip/applyTip',
          data: {
            tipId: this.dialogInfo.tipId,
            tipApprove: this.approveForm.tipApprove,
            tipApplytime: new Date()
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
  border: 1px solid #418771;
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

.approve-dialog-box .el-button:nth-child(2):hover {
  color: #418771;
}
</style>
