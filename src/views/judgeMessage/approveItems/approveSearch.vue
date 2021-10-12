<template>
  <div>
    <el-input
      v-model="input"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="筛选条件" style="width: 110px">
          <el-option label="班级" value="1"></el-option>
          <el-option label="专业" value="2"></el-option>
          <el-option label="学号" value="3"></el-option>
          <el-option label="请假类型" value="4"></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button icon="el-icon-search" @click="getSearchMessage"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'approveSearch',
    data() {
      return {
        input: '',
        select: '',
        dataList: []
      }
    },
    methods: {
      // 选择按照哪种方式筛选，然后获取数据，并渲染
      getSearchMessage() {
        let selectType = parseInt(this.select);   // 选择类型
        if(selectType == 1) { // 按照班级筛选
          this.selectTipByClass();
        } else if (selectType == 2) {
          this.selectTipByProfession();
        } else if (selectType == 3) {
          this.selectTipByAccount();
        } else if (selectType == 4) {
          this.selectTipByType();
        }
      },
      // 1、按专业筛选
      selectTipByProfession() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/selectTipByProfession',
          data: {
            stuPro: this.input
          },
        }).then(res => {
          that.$emit('tip-data-list', res.data.date);
        }).catch(error => {
          console.log(error);
        })
      },
      // 2、按照班级筛选
      selectTipByClass() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/selectTipByClass',
          data: {
            stuAccount: this.input
          },
        }).then(res => {
          console.log("按班级：", res);
          that.$emit('tip-data-list', res.data.date);
        }).catch(error => {
          console.log(error);
        })
      },
      // 3、按照学号筛选
      selectTipByAccount() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/selectTipByAccount',
          data: {
            stuAccount: this.input
          }
        }).then(res => {
          that.$emit('tip-data-list', res.data.date);
        }).catch(error => {
          console.log(error);
        })
      },
      // 4、按请假类型
      selectTipByType() {
        let that = this;
        this.axios({
          method: 'post',
          url: 'api/tip/selectTipByType',
          data: {
            typeName: this.input
          },
        }).then(res => {
          that.$emit('tip-data-list', res.data.date);
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
</style>
