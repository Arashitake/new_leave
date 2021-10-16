<template>
  <div id="person-message">
    <!-- 学生 -->
    <ul v-show="Authority < 2">
      <li>
        <span>姓名：</span>{{personMsg.name}}
      </li>
      <li>
        <span>学号：</span>{{personMsg.account}}
        </li>
      <li>
        <span>性别：</span>{{personInfo.stuSex}}
      </li>
      <li>
        <span>学院：</span>{{personInfo.stuCollege}}
      </li>
      <li>
        <span>专业：</span>{{personInfo.stuPro}}
      </li>
      <li>
        <span>年级：</span>{{personInfo.stuGrade}}
      </li>
      <li v-if="">
        <span>类型：</span>{{personInfo.stuType}}
      </li>
    </ul>
    <!-- 辅导员 -->
    <ul v-show="Authority == 2">
      <li>
        <span>姓名：</span>{{personMsg.name}}
      </li>
      <li>
        <span>学号：</span>{{personMsg.account}}
      </li>
      <li>
        <span>性别：</span>{{personInfo.teaSex}}
      </li>
      <li>
        <span>学院：</span>{{personInfo.teaCollege}}
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
    name: 'personInfo',
    props: {
      personInfo: []
    },
    data() {
      return {
        personMsg: this.$store.state.user,
        Authority: this.$store.state.Authority
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>

<style scoped>
/* ------------------ 内容 ----------------- */
/* 1、个人信息 */
#person-message {
  position: relative;
  width: inherit;
  height: 320px;
}

ul > li {
  margin: 0 40px 10px;
  padding-top: 15px;
  height: 35px;
}

ul > li span {
  font-weight: bold;
  color: #488c76;
}
</style>
