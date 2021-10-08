<template>
  <div class="apply-write-box">
    <div class="apply-title">请假申请</div>
    <from-picker></from-picker>
    <!-- <datetime-picker></datetime-picker> -->
  </div>
</template>

<script>
  import fromPicker from './applyItems/fromPicker.vue';
  import datetimePicker from './applyItems/datetimePicker.vue'

  export default {
    name: 'applyWrite',
    data() {
      return {
      }
    },
    components: {
      fromPicker,
      datetimePicker
    }
  }
</script>


<style scoped>
.apply-write-box {
  width: 900px;
  height: 480px;
  position: relative;
  left: calc(50% - 425px);
}

.from-outsidebox {
  position: absolute;
}

.apply-title {
  position: absolute;
  width: 125px;
  height: 60px;
  line-height: 60px;
  top: 15px;
  left: -20px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 1px #111;
  background: #488c76;
  border-radius: 20px 0 20px 0;
  z-index: 100;
}

</style>
