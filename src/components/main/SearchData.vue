<template>
  <div class="search-data-container">
    <div class="tips">
      <div>
        <span>选择日期：</span>
        <span>{{date | dateFilter}}</span>
      </div>
    </div>

    <div class="table-wrapper">
      <el-table :data="list" border>

        <el-table-column
          label="ID" prop="id">
        </el-table-column>

        <el-table-column
          label="Name"
          prop="name">
        </el-table-column>

        <el-table-column
          label="Age"
          prop="age">
        </el-table-column>

        <el-table-column
          label="Sex"
          prop="sex">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchData',
    data() {
      return {
        list: []
      };
    },
    computed: {
      date() {
        return this.$store.state.main.searchDate;
      }
    },
    methods: {
      initData(len = 10) {
        for (let i = 0; i < len;) {
          this.$index = ++i;
          this.addRecord();
        }
      },
      addRecord() {
        this.list.push({
          id: this.$index,
          name: `Name ${this.$index}`,
          sex: Math.random() > 0.5 ? '男' : '女',
          age: parseInt(String(Math.random()).substr(2, 2))
        });
      }
    },
    filters: {
      dateFilter(v) {
        if (v instanceof Date) {
          return v.format('yyyy年MM月dd日');
        }
        return v;
      }
    },
    created() {
      this.initData(15);
    }
  };
</script>

<style lang="scss" scoped>
  .search-data-container {
    margin-top: 30px;
    > .tips {
      color: #999999;
      font-size: 14px;
      a {
        margin-left: 10px;
      }
    }
    > .table-wrapper {
      margin-top: 10px;
    }
  }
</style>
