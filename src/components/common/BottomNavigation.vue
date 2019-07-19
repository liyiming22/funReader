<template>
  <div class="bottom-nav-wrapper" v-show="pathSet.has(this.$route.path)">
    <van-tabbar route class="nav" :z-index="2000" active-color="#a60b09">
      <van-tabbar-item v-for="item in tabList" :icon="item.icon" :to="item.path" :key="item.name">{{ item.name }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      tabList: [
        {
          name: '书架',
          path: '/',
          icon: 'column',
          n: 1
        },

        {
          name: '发现',
          path: '/explore',
          icon: 'eye',
          n: 2
        },

        {
          name: '排行',
          path: '/rank',
          icon: 'medel',
          n: 2
        }
      ],
      pathSet: new Set(['/', '/explore', '/rank'])
    }
  },
}
</script>

<style lang="scss" scoped>
  .bottom-nav-wrapper {
    height: 50px;
    width: 100%;
    z-index: 9999;
  }
</style>
