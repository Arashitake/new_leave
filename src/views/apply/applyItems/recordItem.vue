<template>
  <div class="record-item-box">
    <div class="leave-id-box">Leave application</div>
     <el-divider content-position="right"><i class="el-icon-star-on"></i></el-divider>
    <ul class="leave-content">
      <li>
        <span>姓&nbsp;&nbsp;&nbsp;名：</span>{{this.$store.state.user.name}}
      </li>
      <li>
        <span>学&nbsp;&nbsp;&nbsp;号：</span>{{msg.stuAccount}}
      </li>
      <li>
        <span>开始时间：</span>{{new Date(msg.tipStart).toLocaleString()}}
      </li>
      <li>
        <span>结束时间：</span>{{new Date(msg.tipEnd).toLocaleString()}}
      </li>
      <li>
        <span>审核状态：</span>{{msg.tipVeridied == 0 ? "未审核" : (msg.tipVeridied == 1 ? "审核通过" : "审核不通过")}}
      </li>
      <li>
        <span>审批状态：</span>{{msg.tipApprove == 0 ? "未审批" : (msg.tipApprove == 1 ? "审批通过" : "审批不通过")}}
      </li>
    </ul>
    <record-dialog :msg="msg"/>

  </div>
</template>

<script>
  import recordDialog from '../applyItems/recordDialog.vue';

  export default {
    name: 'recordItem',
    props: {
      msg: {
        type: Object
      }
    },
    data() {
      return {

      }
    },
    components: {
      recordDialog
    }
  }
</script>

<style scoped>
.record-item-box {
  width: 800px;
  height: 280px;
  border: 1px solid #418771;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(53, 74, 94, 0.15);
  transition: all ease-in-out .3s;
  /* background: rgba(65, 135, 113, 0.25); */
}

.record-item-box:hover {
  box-shadow: 6px 6px 15px rgba(53, 74, 94, 0.35);
}

/* 编号id */
.leave-id-box {
  margin: 0 10px;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  letter-spacing: 1px;
  font-style: italic;
  font-size: 18px;
  font-weight: bold;
}

/* 分割线 */
.el-divider {
  width: 770px;
  margin: 0 15px;
  border-bottom: 2px solid #418771;
}

.el-icon-star-on {
  color: #dd5145;
  font-size: 24px;
  /* color: #ffcd42; */
}

/* leave-content：请假内容 */
ul {
  list-style-type: none;
  margin: 15px 40px 0;
  letter-spacing: 2px;
}

ul > li {
  line-height: 25px;
}

ul > li > span {
  color: #418771;
  font-weight: bold;
}

</style>
