<template>
  <div id="modify-person-message">
    <i class="el-icon-edit" @click="startEditing()"></i>
    <div class="message-box">
      <ul>
        <li>
          <span>姓名：</span>
          <b v-show="!isEdit">{{personInfo.stuName}}</b>
          <el-input v-show="isEdit" v-model="personInfo.stuName" clearable disabled/>
        </li>
        <li>
          <span>学号：</span>
          <b v-show="!isEdit">{{personInfo.stuAccount}}</b>
          <el-input v-show="isEdit" v-model="personInfo.stuAccount" clearable disabled/>
        </li>
        <li>
          <span>性别：</span>
          <b v-show="!isEdit">{{personInfo.stuSex}}</b>
          <el-input v-show="isEdit" v-model="personInfo.stuSex" clearable/>
        </li>
      </ul>
      <ul>
        <li>
          <span>学院：</span>
          <b v-show="!isEdit">{{personInfo.stuCollege}}</b>
          <el-input v-show="isEdit" v-model="personInfo.stuCollege" clearable/>
          </li>
        <li>
          <span>专业：</span>
          <b v-show="!isEdit">{{personInfo.stuPro}}</b>
          <el-input v-show="isEdit" v-model="personInfo.stuPro" clearable/>
          </li>
        <li>
          <span>年级：</span>
          <b v-show="!isEdit">{{personInfo.stuGrade}}</b>
          <el-input v-show="isEdit" v-model="personInfo.stuGrade" clearable/>
        </li>
        <li>
          <span>类型：</span>
          <b v-show="!isEdit">{{personInfo.stuType}}</b>
          <el-input v-show="isEdit" v-model="personInfo.stuType" clearable disabled/>
        </li>
      </ul>
    </div>
    <div class="btn-box" v-show="isEdit">
      <el-button type="primary" @click="modifyInfoMessage()">更新个人信息</el-button>
    </div>
    <!-- <el-alert v-show="" title="修改个人信息成功" type="success" center show-icon> </el-alert> -->
  </div>
</template>

<script>
  export default {
    name: 'modifyInfo',
    props: {
      personInfo: []
    },
    data() {
      return {
        personMsg: this.$store.state.user,
        isEdit: false
      }
    },
    methods: {
      // 是否启动编辑
      startEditing() {
        this.isEdit = !this.isEdit;
      },
      // 修改信息
      modifyInfoMessage() {
        this.axios({
          method: 'post',
          url: 'api/student/changeStudentInfoByAccount',
          data: {
            stuAccount: this.personInfo.stuAccount,
            stuName: this.personInfo.stuName,
            stuSex: this.personInfo.stuSex,
            stuGrade: this.personInfo.stuGrade,
            stuCollege: this.personInfo.stuCollege,
            stuPro: this.personInfo.stuPro
          }
        }).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error);
        })
        // 编辑结束
        this.startEditing();
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
  position: relative;
  margin-left: 20px;
  width: inherit;
  height: 320px;
  background: rgba(72, 140, 118, 0.1);
  border-radius: 20px 0 20px 0;
  border: 1px solid #c1c1c1;
  z-index: 10;
}

.el-icon-edit {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 10px;
  right: 10px;
  line-height: 25px;
  text-align: center;
  color: #fff;
  background: #469679;
  border-radius: 50%;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .25);
  transition: all ease-in-out .3s;
  cursor: pointer;
}

.el-icon-edit:hover {
  background: #40b682;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, .25);
}

#modify-person-message > .message-box {
  display: flex;
}

ul {
  padding-top: 25px;
  width: calc(50%);
}

ul:nth-child(1) {
  width: 270px;
  margin-left: 30px;
}

ul:nth-child(1) .el-input {
  width: 180px;
}

ul > li {
  margin: 0 20px 18px;
  height: 42px;
  line-height: 42px;
}

ul > li span {
  font-weight: bold;
  color: #488c76;
}

ul > li > b {
  color: #333;
  font-weight: initial;
}

ul:nth-child(2) .el-input {
  width: 220px;
}

/* ------------- 按钮 ---------------- */
.btn-box {
  text-align: center;
}

.btn-box > .el-button {
  margin: 0 10px;
  width: 150px;
  background: #488c76;
  transition: all ease-in-out .3s;
  border: 1px solid #488c76;
}

.btn-box > .el-button:hover {
  background: #40b682;
}
</style>
