<template>
  <div class="from-outsidebox">
    <el-form ref="form" :model="form" label-width="120px">
      <!-- 时间 -->
      <el-form-item id="date-block" label="请假时间">
        <!-- 日历开始时间 -->
        <div>
          <el-col :span="11">
            <el-date-picker
              v-model="form.date1"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              @change="getStartTime"
              type="date"
              placeholder="请假开始日期"
              style="width: 100%; margin-left: 10px">
            </el-date-picker>
          </el-col>
          <el-col :span="11" style="margin: 0 0 0 25px">
            <el-select v-model="form.region1" placeholder="请假开始节次">
              <el-option v-for='(item, index) in courseTime.start' :label='"第"+(index+1)+"小节"' :value="item"></el-option>
            </el-select>
          </el-col>
        </div>
        <!-- 日历结束时间 -->
        <div>
          <el-col :span="11">
            <el-date-picker
              v-model="form.date2"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              @change="getEndTime"
              type="date"
              placeholder="请假结束日期"
              style="width: 100%; margin: 15px 0 0 10px">
            </el-date-picker>
          </el-col>
          <el-col :span="11" style="margin: 15px 0 0 25px">
            <el-select v-model="form.region2" placeholder="请假结束节次">
              <el-option v-for='(item, index) in courseTime.end' :label='"第"+(index+1)+"小节"' :value="item"></el-option>
            </el-select>
          </el-col>
        </div>
      </el-form-item>

      <el-form-item label="涉及天数">
        <!-- {{getStartTime()}} - {{getStartTime()}} -->
      </el-form-item>

      <!-- 单选框 -->
      <el-form-item label="请假类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="病假"></el-radio>
          <el-radio label="事假"></el-radio>
          <el-radio label="工假"></el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 输入框 -->
      <el-form-item label="请假原因">
        <el-input v-model="form.desc" type="textarea" style="margin-left: 10px"></el-input>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button id="form-submit" type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'fromPicker',
    data() {
    return {
      courseTime: {
        start: [
          '08:20:00', '09:10:00', '10:15:00', '11:05:00',
          '14:00:00', '14:50:00', '15:40:00', '16:35:00',
          '17:25:00', '19:00:00', '19:50:00'
        ],
        end: [
          '09:05:00', '09:55:00', '11:00:00', '11:50:00',
          '14:45:00', '15:35:00', '16:25:00', '17:20:00',
          '18:10:00', '19:45:00', '20:35:00'
        ]
      },
      form: {
        name: '',
        region1: '',
        region2: '',
        date1: '',
        date2: '',
        delivery: false,
        resource: '',
        desc: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.postLeaveTip();
      console.log('submit!')
    },
    getStartTime(val) {
      this.form.date1 = val;
      return this.form.date1;
    },
    getEndTime(val) {
      this.form.date2 = val;
      return this.form.date2;
    },
    // 判断为哪一类假条类型
    judgeresource(resource) {
      let resNum = 0;
      if(resource == '事假') {
        resNum = 1;
      } else if(resource == '病假') {
        resNum = 2;
      } else if(resource == '工假') {
        resNum = 3;
      }
      return resNum;
    },
    // 发送请假申请
    postLeaveTip() {
      let that = this;
      this.axios({
        method: 'post',
        url: 'api/tip/askLeave',
        data: {
          stuAccount: this.$store.state.user.account,
          typeId: this.judgeresource(this.form.resource),
          tipReason: this.form.desc,
          tipStart: new Date(this.form.date1+' '+this.form.region1),
          tipEnd: new Date(this.form.date2+' '+this.form.region2),
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res);
        that.$router.push('/Home');
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
.from-outsidebox {
  margin: 45px auto 0;
  padding: 50px 60px 0 0;
  width: 850px;
  border-radius: 0 50px 0 50px;
  border: 1px solid #418771;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.25);
}

/* --------- 请假时间：date-block ---------- */
#date-block {
  width: 680px;
}

.el-form-item {
  font-weight: bold;
}

.el-form-item .el-radio:nth-child(1) {
  margin-left: 10px;
}

/* 提交按钮 */
#form-submit {
  margin-top: 10px;
  margin-left: calc(50% - 150px);
  width: 200px;
  background: rgba(72, 140, 118, 0.8);
  transition: all ease-in-out .3s;
  border: 1px solid #418771;
  box-shadow: 4px 4px 10px rgba(53, 74, 94, 0.2);
}

#form-submit:hover {
  background: rgba(72, 140, 118, 1);
}
</style>

