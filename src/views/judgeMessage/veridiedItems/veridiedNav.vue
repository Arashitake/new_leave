<template>
  <div id="veridied-tab">
    <button class="veridied-title" @click="getUnVeridiedTip($event)">班级假条审核</button>
    <button class="history-msg" @click="getHistoryByClass($event)">班级历史信息</button>
    <!-- <button class="history-msg" @click="showThisBtn($event)">申诉信息</button> -->
  </div>
</template>

<script>
  import className from "../../../assets/javascript/className";

  export default {
    name: 'veridiedNav',
    data() {
      return {
        dataList: []
      }
    },
    mounted() {
    },
    methods: {
      // 更改被选中的样式
      showThisBtn(e) {
        // e.currentTarget 当前绑定事件的元素
        className.replaceClass(e.currentTarget, "veridied-title");
        let bors = className.siblings(e.target);  // 兄弟节点
        for(let i = 0; i < bors.length; i++) {
          className.replaceClass(bors[i], "history-msg");
        }
      },
      // 获取班级未审核的tips
      getUnVeridiedTip(e) {
        this.selectUnVeridiedTipByClass();
        this.showThisBtn(e);
      },
      // 获取班级历史信息
      getHistoryByClass(e) {
        this.selectTipByClass();
        this.showThisBtn(e);
      },
      // ------------------------- 请求 -------------------------
      // 班级假条审核：2、按照班级筛选
      selectUnVeridiedTipByClass() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/selectUnVeridiedTipByClass',
          data: {
            stuAccount: this.$store.state.user.account
          },
        }).then(res => {
          that.$emit('classTip-data-list', res.data.date);
        }).catch(error => {
          console.log(error);
        })
      },
      // 获取班级的全部历史请假信息
      selectTipByClass() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/getTipByClass',
          data: {
            stuAccount: this.$store.state.user.account
          },
        }).then(res => {
          that.$emit('classTip-data-list', res.data.date.reverse());
        }).catch(error => {
          console.log(error);
        })
      },

    },
    components: {

    }
  }
</script>

<style scoped>
#veridied-tab {
  display: flex;

}

.veridied-title, .history-msg {
  margin-right: 20px;
  margin-bottom: 8px;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  border-radius: 20px 0 20px 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  transition: all ease-in-out .3s;
  border: 1px solid #488c76;
}

.veridied-title {
  color: #fff;
  background: #488c76;
}

.veridied-title:hover {
  background: #40b582;
  border: 1px solid #488c76;
}

.history-msg {
  color: #488c76;
  background: #fff;
  border: 1px solid #488c76;
}

.history-msg:hover {
  color: #fff;
  background: #40b582;
}
</style>
