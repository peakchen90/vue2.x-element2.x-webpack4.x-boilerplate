<template>
  <div class="header-container">
    <div>
      <img src="~assets/logo.png">
      <el-date-picker size="small"
                      placeholder="选择日期"
                      v-model="date">
      </el-date-picker>
    </div>

    <div>
      <router-link to="others">
        <el-button type="default" size="small">Others</el-button>
      </router-link>
      <el-button type="primary"
                 size="small"
                 @click="onDateChange">搜索
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchHeader',
    data() {
      return {
        date: new Date()
      };
    },
    computed: {},
    methods: {
      onDateChange() {
        this.$store.commit('updateSearchDate', this.date);
      }
    },
    created() {
      this.onDateChange();
    }
  };
</script>

<style lang="scss" scoped>
  .header-container {
    display: flex;
    justify-content: space-between;
    > div img {
      width: 30px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
</style>
