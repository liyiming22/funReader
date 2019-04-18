<template>
  <div class="bottom-nav-wrapper">
    <mu-bottom-nav>
      <mu-bottom-nav-item title="书架" to="/" :replace=replacePath icon=":fa fa-book-open"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="发现" to="/explore" :replace=replacePath icon=":fas fa-compass"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="排行" to="rank" :replace=replacePath icon=":fas fa-trophy"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      replacePath: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-nav-wrapper {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .mu-bottom-nav {
    height: 50px;
    padding-top: 5px;
  }

  .mu-bottom-item-active {
    color: #a60b09;
  }
</style>
