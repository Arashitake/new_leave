<template>
  <div id="modify-person-message">
    <ul>
      <li>
        <span>姓名：</span>
        <el-input v-model="infoForm.name" clearable/>
      </li>
      <li>
        <span>学号：</span>{{personMsg.account}}
      </li>
      <li>
        <span>性别：</span>{{personInfo.stuSex}}
      </li>
    </ul>
    <ul>
      <li>
        <span>学院：</span>{{personInfo.stuCollege}}
        </li>
      <li>
        <span>专业：</span>{{personInfo.stuPro}}
        </li>
      <li>
        <span>年级：</span>{{personInfo.stuGrade}}
      </li>
      <li>
        <span>类型：</span>{{personInfo.stuType}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'modifyInfo',
    props: {
      personInfo: [],
    },
    data() {
      return {
        personMsg: this.$store.state.user,
        infoForm: {
          name: "123456"
        }
      }
    },
    mounted() {
      this.getInput();
    },
    methods: {
      getInput() {
        let inputOne = document.getElementsByTagName('el-input')
        console.log(inputOne.value);
      }
    },
    components: {

    }
  }
</script>

<style scoped>
/* ------------------ 内容 ----------------- */
/* 1、个人信息 */
#modify-person-message {
  margin-left: 20px;
  width: inherit;
  height: 320px;
  background: #f5f7fa;
  border-radius: 20px 0 20px 0;
  border: 1px solid #c1c1c1;
}

ul {
  float: left;
  width: calc(50%);
}

ul > li {
  margin: 0 20px 10px;
  padding-top: 25px;
  height: 30px;
}

ul > li span {
  font-weight: bold;
  color: #40aaff;
}

</style>
