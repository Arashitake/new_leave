<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true">详&nbsp;&nbsp;&nbsp;情</el-button>
    <el-dialog
      title="请假详细信息"
      :visible.sync="centerDialogVisible"
      width="800px"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'recordDialog',
    data() {
      return {
        centerDialogVisible: false
      }
    },
    components: {

    }
  }
</script>

<style scoped>
.el-dialog {
}

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
  background: #40b682;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
}
</style>
