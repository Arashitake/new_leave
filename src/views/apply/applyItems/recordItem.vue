<template>
  <div class="record-item-box">
    <div class="leave-id-box">请假条编号：{{msg.title}}</div>
     <el-divider content-position="right"><i class="el-icon-star-on"></i></el-divider>
    <ul class="leave-content">
      <li>姓&nbsp;&nbsp;&nbsp;名：</li>
      <li>学&nbsp;&nbsp;&nbsp;号：</li>
      <li>开始时间：</li>
      <li>结束时间：</li>
      <li>请假时长：</li>
      <li>审批状态：</li>
    </ul>
    <record-dialog/>

  </div>
</template>

<script>
  import recordDialog from '../applyItems/recordDialog.vue';

  export default {
    name: 'recordItem',
    props: {
      // dataList: ['dataList'],
      msg: {
        type: Object,
        default: '未初始化'
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
  margin: 15px 40px;
  letter-spacing: 2px;
}

ul > li {
  line-height: 25px;
}



</style>
