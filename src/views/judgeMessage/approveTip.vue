<template>
  <div id="approve-tip-box">
    <div id="top-btns-nav">
      <el-button @click="getAllUnApplyTipList()">查询全部未审批</el-button>
      <!-- 搜索框 -->
      <div class="filter-btn-box">
        <approve-search @tip-data-list="getChildren"></approve-search>
      </div>
      <el-button @click="getAllTip()">查询所有历史请假信息</el-button>
    </div>
    <approve-table :dataList="dataList"></approve-table>
  </div>
</template>

<script>
  import approveTable from "./approveItems/approveTable.vue";
  import approveSearch from "./approveItems/approveSearch.vue";

  export default {
    name: 'approveTip',
    data() {
      return {
        dataList: [],
        getAllMsg: ''  // 查询全部
      }
    },
    mounted() {
      this.getAllUnApplyTipList();
    },
    methods: {
      getChildren(dataList) {
        this.dataList = dataList;
      },
      // 1、初始显示的是全部
      getAllUnApplyTipList() {
        let that = this;
        this.axios({
          method: 'get',
          url: 'api/tip/getAllUnApplyTipList',

        }).then(res => {
          that.dataList = res.data.date;
        }).catch(error => {
          console.log(error);
        })
      },
      // 2、查询所有历史请假信息
      getAllTip() {
        let that = this;
        this.axios({
          method: 'get',
          url: 'api/tip/getAllTip',

        }).then(res => {
          console.log(res);
          that.dataList = res.data.date;
        }).catch(error => {
          console.log(error);
        })
      }
    },
    components: {
      approveTable,
      approveSearch
    }
  }
</script>

<style scoped>
#approve-tip-box {
  display: flex;
  width: 100%;
  min-width: 1200px;
  height: 510px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* ------ 顶栏 ------ */
#top-btns-nav {
  margin-bottom: 5px;
  display: flex;
  width: 860px;
  /* border: 1px solid #f00; */
}

#top-btns-nav .el-button {
  margin: 0 20px;
  height: 50px;
  background: #488c76;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1px;
  text-shadow: .2px .2px 1px #000;
  border-radius: 0 20px 0 20px;
  border: 1px solid #488c76;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}

/* --------------- 条件筛选的盒子 ------------------ */
.filter-btn-box {
  padding: 4px 25px;
  width: 460px;
  height: 50px;
  border-radius: 0 20px 0 20px;
  border: 1px solid #488c76;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}

/* .filter-btn-box {
  margin-bottom: 20px;
  padding: 5px 20px;
  width: 960px;
  height: 50px;
  border-radius: 0 20px 0 20px;
  border: 2px solid #488c76;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}

.filter-btn-box .el-button {
  height: 34px;
  line-height: 6px;
} */
</style>
