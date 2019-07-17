<template>
  <div class="wrapper">
    <SearchBar></SearchBar>
    <Swiper :sum="3">
      <div v-for="src in imgArr" class="swiper-item" :key="src">
        <img :src="src" alt="img">
      </div>
    </Swiper>
    <Menu></Menu>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import Swiper from './components/Swiper'
import Menu from './components/Menu'
export default {
  name: 'Explore',
  data () {
    return {
      imgArr: [
        'http://statics.zhuishushenqi.com/recommendPage/15543710092511',
        'http://statics.zhuishushenqi.com/recommendPage/156111169844287',
        'http://statics.zhuishushenqi.com/recommendPage/156111180957475'
      ]
    }
  },
  components: {
    SearchBar,
    Swiper,
    Menu
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
</style>
