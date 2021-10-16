<template>
  <div id="approve-tip-table">
    <el-table :data="this.getBroData" style="width: 100%" height="368">
      <el-table-column fixed prop="tipId" label="Id" width="40" />
      <el-table-column fixed prop="stuAccount" label="学号" width="100" />
      <el-table-column label="请假类型" width="120">
        <template slot-scope="scope">
          {{scope.row.typeId == 2 ? '病假' : (scope.row.typeId == 1 ? '事假' : '工假')}}
        </template>
      </el-table-column>
      <el-table-column prop="tipReason" label="请假原因" width="200" />
      <el-table-column label="开始时间" width="185">
        <template slot-scope="scope">
          {{new Date(scope.row.tipStart - 28800000).toLocaleString()}}
        </template>
      </el-table-column>
      <el-table-column label="结束时间" width="185">
        <template slot-scope="scope">
          {{new Date(scope.row.tipEnd - 28800000).toLocaleString()}}
        </template>
      </el-table-column>
      <el-table-column label="是否审核" width="120" >
        <template slot-scope="scope">
          {{scope.row.tipVeridied == 0 ? "未审核" : (scope.row.tipVeridied == 1 ? "审核通过" : "审核不通过")}}
        </template>
      </el-table-column>
       <el-table-column label="是否审批" width="120" >
        <template slot-scope="scope">
          {{scope.row.tipApprove == 0 ? "未审批" : (scope.row.tipApprove == 1 ? "审批通过" : "审批不通过")}}
        </template>
      </el-table-column>
      <el-table-column label="审批时间" width="185">
        <template slot-scope="scope">
          {{scope.row.tipApplytime == null ? "-" : new Date(scope.row.tipApplytime - 28800000).toLocaleString()}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="审批" width="100">
        <template slot-scope="scope">
          <!-- scope.row：将该行数据传递进去 -->
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <approve-dialog :dialogVisible="dialogVisible" :dialogInfo="dialogInfo" @update:dialogVisible="dialogVisibles"></approve-dialog>
  </div>
</template>

<script>
  import approveDialog from './approveDialog.vue'

  export default {
    name: 'approveTable',
    components: {
      approveDialog
    },
    props: {
      dataList: [],
    },
    data() {
      return {
        dialogInfo: {},
        dialogVisible: false,
      }
    },
    computed: {
      getBroData() {  // 获取到父传子的数据，并即时更新
        return this.dataList;
      }
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
      dateFtt(fmt, date) {
        let o = {
          "M+": date.getMonth() + 1,
          "d+": date.getDate(),
          "h+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds(),
          "q+": Math.floor((date.getMonth() + 3) / 3),
          "S": date.getMilliseconds()
        };
        if(/(y+)/.test(fmt))
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for(var k in o)
          if(new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
		  },
      //点击查看 按钮 的事件
      handleClick(info) {
        this.dialogVisible = true;
        this.dialogInfo = info;
        // console.log("点击查看");
      },
      // 子组件传递过来的数据
      dialogVisibles(v) {
        this.dialogVisible = v;
        console.log(v);
      }
    },
  }
</script>

<style scoped>
#approve-tip-table {
  padding: 10px;
  width: 960px;
  height: 400px;
  border-radius: 20px 0 20px 0;
  border: 1px solid #488c76;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  /* background: rgba(72, 140, 118, .5); */
}

</style>
