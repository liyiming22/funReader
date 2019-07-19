<template>
  <header class="wrapper">
    <router-link to="/search">
      <span class="placeholder">
        <van-icon name="search" />
        &nbsp;&nbsp;
        趣搜索
      </span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  header {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    padding-left: .5em;
    border-radius: 10%;
    background: #f4f4f4;
    span {
      display: block;
      width: 100%;
      color: #aaabac;
    }
  }
</style>
