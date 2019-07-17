<template>
  <div class="menu">
    <router-link to="/">
      <IconSvg icon-class="fenlei" class="icon" />
      <p>分类</p>
    </router-link>
    <router-link to="/rank">
      <IconSvg icon-class="paihangbang-" class="icon" />
      <p>排行</p>
    </router-link>
    <router-link to="/search">
      <IconSvg icon-class="sousuo" class="icon" />
      <p>搜索</p>
    </router-link>
    <router-link to="/">
      <IconSvg icon-class="remen" class="icon" />
      <p>热门</p>
    </router-link>
  </div>
</template>

<script>
import IconSvg from '@/components/common/IconSvg'
export default {
  name: "menu",
  components: {
    IconSvg
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    a {
      display: block;
      width: 25%;
      text-align: center;
      font-family: 'Microsoft Yahei';
      color: #656669;
      .icon {
        width: 1.8em;
        height: 1.8em;
      }
    }
  }
</style>
