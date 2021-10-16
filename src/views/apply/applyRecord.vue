<template>
  <div class="apply-record-box">
    <!-- 筛选栏 -->
    <div class="side-nav-bar">
      <ul>
        <li @click="change(index)" :class='currentIndex==index?"tab-selected":""' :key='item.id' v-for='(item, index) in tipsList'>
          {{item.tag}}
        </li>
      </ul>
    </div>
    <!-- 显示请假 -->
    <div id="records-box">
      <div :class='currentIndex==index?"current":""' :key='item.id' v-for='(item, index) in tipsList'>
        <record-item v-for="(d, i) in item.ApproveList" :msg="d"></record-item>
      </div>
    </div>
  </div>
</template>

<script>
  import recordItem from './applyItems/recordItem.vue'

  export default {
    name: 'applyRecord',
    data() {
      return {
        dataList: [],
        currentIndex: 0,
        tipsList: [{
          id: 1,
          tag: '未审核',
          ApproveList: []
        },
        {
          id: 2,
          tag: '未审批',
          ApproveList: []
        },
        {
          id: 3,
          tag: '已审批',
          ApproveList: []
        },
        {
          id: 4,
          tag: '历史记录',
          ApproveList: []
        }]
      }
    },
    mounted() {
      this.getUnVeridiedAndUnAppyTipList();
    },
    methods: {
      change: function(index) {
        this.currentIndex = index;
        if(index == 0) {  // 未审核未审批
          this.getUnVeridiedAndUnAppyTipList();
        } else if (index == 1) {  // 已审核未审批
          this.selectTipByAccount();
        } else if (index == 2) {  // 已审核已审批
          this.getVeridiedAndAppyTipList();
        } else if (index == 3) {  // 获取个人请假历史记录
          this.queryHistoryTip();
        }
      },
      // 获取未审核未审批信息：可以撤回请假申请
      getUnVeridiedAndUnAppyTipList() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/getUnVeridiedAndUnAppyTipList',
          data: {
            stuAccount: this.$store.state.user.account
          }
        }).then(res => {
          that.tipsList[0].ApproveList = res.data.date.reverse();
        }).catch(error => {
          console.log(error);
        })
      },
      // 获取某个学生的已审核未审批信息
      selectTipByAccount(){
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/selectTipByAccount',
          data: {
            stuAccount: this.$store.state.user.account
          },
        }).then(res => {
          that.tipsList[1].ApproveList = res.data.date;
        }).catch(error => {
          console.log(error);
        })
      },
      // 获取已审批信息
      getVeridiedAndAppyTipList() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/getVeridiedAndAppyTipList',
          data: {
            stuAccount: this.$store.state.user.account
          }
        }).then(res => {
          that.tipsList[2].ApproveList = res.data.date.reverse();
        }).catch(error => {
          console.log(error);
        })
      },
      // 获取个人所有历史请假申请记录
      queryHistoryTip() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/queryHistoryTip',
          data: {
            stuAccount: this.$store.state.user.account
          }
        }).then(res => {
          that.tipsList[3].ApproveList = res.data.date.reverse();
        }).catch(error => {
          console.log(error);
        })
      },
    },
    components: {
      recordItem,
    }
  }
</script>

<style scoped>
.apply-record-box {
  display: flex;
  width: 100%;
  min-width: 1200px;
  flex-direction: row;

}

/* ----------------- 侧边导航栏 ----------------- */
.side-nav-bar {
  position: fixed;
  margin: 30px 0 30px 15px;
  width: 60px;
  border-radius: 0 30px 0 30px;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
  overflow: hidden;
  z-index: 100;
}

.side-nav-bar li {
  padding: 10px 20px;
  width: 65px;
  /* height: 100px; */
  color: #418771;
  font-weight: bold;
  cursor: pointer;
  background: #fff;
  border: 1px solid #418771;
}

/* .side-nav-bar li:nth-child(1) {
  padding-top: 25px;
  border-radius: 0 50px 0 0;
}
.side-nav-bar li:nth-child(2) {
  padding-top: 15px;
  border-radius: 0 0 0 50px;
} */

.side-nav-bar li:hover {
  color: #333;
}

/* 被选中的选项 */
.tab-selected {
  color: #fff !important;
  background: #488c76 !important;
}

/* ----------------- 右侧内容页 ----------------- */
#records-box {
  width: inherit;
  display: flex;
  margin: 50px calc(50% - 391px);
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

.record-item-box {
  margin: 0 0 25px 0;
}

/* 当前选中显示 */
.current {
  display: block !important;
}

/* 最开始都是不显示 */
#records-box > div {
  display: none;
}

</style>
