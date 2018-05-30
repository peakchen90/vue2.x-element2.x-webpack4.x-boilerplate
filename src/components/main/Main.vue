<template>
  <div class="main-container">
    <search-header></search-header>
    <search-data></search-data>
  </div>
</template>

<script>
  import SearchHeader from './SearchHeader';
  import SearchData from './SearchData';

  export default {
    name: 'Main',
    components: {
      SearchHeader,
      SearchData
    },
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>

</style>
