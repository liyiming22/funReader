<template>
  <div id="app">
    <router-view/>
    <BottomNav></BottomNav>
    <Loading v-show="showAnimation"></Loading>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BottomNav from '@/components/common/BottomNavigation'
import Loading from '@/components/common/Loading'
export default {
  name: 'App',
  components: {
    BottomNav,
    Loading
  },
  computed: {
    ...mapState(['showAnimation'])
  },
}
</script>

<style lang="scss">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
</style>
