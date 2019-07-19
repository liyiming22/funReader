<template>
  <div class="bottom-nav-wrapper" v-show="pathSet.has(this.$route.path)">
    <!-- <mu-bottom-nav>
      <mu-bottom-nav-item title="书架" to="/" :replace=replacePath icon=":fa fa-book-open"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="发现" to="/explore" :replace=replacePath icon=":fas fa-compass"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="排行" to="/rank" :replace=replacePath icon=":fas fa-trophy"></mu-bottom-nav-item>
    </mu-bottom-nav> -->
    <van-tabbar :z-index="2000" v-model="active" @change="change" active-color="#a60b09">
      <van-tabbar-item v-for="item in tabList" :icon="item.icon" :to="item.path" :key="item.name">{{ item.name }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      active: 0,
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
          path: 'rank',
          icon: 'medel',
          n: 2
        }
      ],
      pathSet: new Set(['/', '/explore', '/rank'])
    }
  },
  created () {
    let arr = this.tabList.filter(el => {
      return el.path === this.$router.history.current.path
    })
    this.change(arr[0].n)
  },
  watch: {
    $route(from) {
      let arr = this.tabList.filter(el => {
        return el.path === from.path;
      });
      if (arr.length >= 1) {
        this.change(arr[0].n);
      }
    }
  },
  methods: {
    change (n) {
      this.active = n
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
