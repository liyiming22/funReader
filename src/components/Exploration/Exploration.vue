<template>
  <div class="wrapper">
    <SearchBar></SearchBar>
    <Swiper :sum="3">
      <div v-for="src in imgArr" class="swiper-item" :key="src">
        <img :src="src" alt="img">
      </div>
    </Swiper>
    <FeatureMenu></FeatureMenu>
    <List></List>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import Swiper from './components/Swiper'
import FeatureMenu from './components/FeatureMenu'
import List from './components/List'
import { mapActions } from 'vuex'
export default {
  name: 'Explore',
  components: {
    SearchBar,
    Swiper,
    FeatureMenu,
    List
  },
  data () {
    return {
      imgArr: [
        'http://statics.zhuishushenqi.com/recommendPage/15543710092511',
        'http://statics.zhuishushenqi.com/recommendPage/156111169844287',
        'http://statics.zhuishushenqi.com/recommendPage/156111180957475'
      ]
    }
  },
  methods: {
    ...mapActions([
      'getCategory',
      'getRank'
    ])
  },
  created () {
    this.getCategory()
        .then(data => console.log(data.data.male[0]._id))
        .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
</style>
