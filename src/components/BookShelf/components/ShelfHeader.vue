<template>
  <header class="wrapper">
    <div class="title">追书神器</div>
    <router-link to="/search">
      <mu-icon value=":fas fa-search"></mu-icon>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'ShelfHeader'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    margin-bottom: 1.5em;
    background: #a60b09;
    color: #fff;
    .title {
      font: bold 15px/45px 'Microsoft Yahei';
    }
    .mu-icon {
      color: #fff;
      line-height: 45px;
    }
  }
</style>
