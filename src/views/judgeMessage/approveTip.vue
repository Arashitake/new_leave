<template>
  <div id="approve-tip-box">
    <div class="filter-btn-box">
      <approve-search @tip-data-list="getChildren"></approve-search>
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
        dataList: []
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

/* --------------- 条件筛选的盒子 ------------------ */
.filter-btn-box {
  margin-bottom: 5px;
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
