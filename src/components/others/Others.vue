<template>
  <div class="others">
    <h3>
      <span>Others</span>
      <div v-show="show" class="qrcode"></div>
    </h3>
    <router-link to="/">
      <el-button size="small" type="primary">Home</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Others',
    data() {
      return {
        show: true
      };
    }
  };
</script>

<style lang="scss" scoped>
  .others {
    .qrcode {
      width: 60px;
      height: 60px;
      float: right;
      background: url("~assets/qrcode.png") center no-repeat;
    }
  }
</style>
