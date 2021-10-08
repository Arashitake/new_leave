<template>
  <div class="apply-record-box">
    <!-- 筛选栏 -->
    <div class="side-nav-bar">
      <ul>
        <li @click="change(index)" :class='currentIndex==index?"tab-selected":""' :key='item.id' v-for='(item, index) in list'>
          {{item.tag}}
        </li>
      </ul>
    </div>
    <!-- 显示请假 -->
    <div id="records-box">
      <div :class='currentIndex==index?"current":""' :key='item.id' v-for='(item, index) in list'>
        <!-- <record-item :dataList='dataList'></record-item> -->
        <record-item v-for="(i, j) in item.abbData" :msg="i"></record-item>
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
        list: [{
          id: 1,
          tag: '已审批',
          abbData: [{
            title: '001'
          },{
            title: '002'
          }]
        },{
          id: 2,
          tag: '未审批',
          abbData: [{
            title: '222'
          },{
            title: '333'
          }]
        }]
      }
    },
    mounted() {
      // this.https();
    },
    methods: {
      https() {
        let that = this;    // 保存当前this
        this.axios.get("https://service-dxtrccme-1302998929.gz.apigw.tencentcs.com/release/accordin")
        .then(res => {
          console.log(res);
          let data = res.data.data[0];
          that.dataList = data;
          console.log(typeof(this.dataList));
        })
      }
    },
    methods: {
      change: function(index) {
        this.currentIndex = index;
      }
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
  height: 200px;
  border-radius: 0 50px 0 50px;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
  overflow: hidden;
}

.side-nav-bar li {
  padding: 0 20px;
  width: 65px;
  height: 100px;
  color: #418771;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #418771;
}

.side-nav-bar li:nth-child(1) {
  padding-top: 25px;
  border-radius: 0 50px 0 0;
}
.side-nav-bar li:nth-child(2) {
  padding-top: 15px;
  border-radius: 0 0 0 50px;
}

.side-nav-bar li:hover {
  color: #333;
}

/* 被选中的选项 */
.tab-selected {
  color: #fff !important;
  background: #488c76;
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
