<template>
  <div class="login-msg">

  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    components: {

    }
  }
</script>

<style scoped>
</style>
