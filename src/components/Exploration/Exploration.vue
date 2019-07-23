<template>
  <div class="wrapper">
    <SearchBar></SearchBar>
    <Swiper :sum="3">
      <div v-for="src in imgArr" class="swiper-item" :key="src">
        <img :src="src" alt="img">
      </div>
    </Swiper>
    <FeatureMenu></FeatureMenu>
    <van-pull-refresh v-if="!isLoad" v-model="isLoading" @refresh="onRefresh">
      <List :books="books"></List>
    </van-pull-refresh>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import Swiper from './components/Swiper'
import FeatureMenu from './components/FeatureMenu'
import List from '@/components/common/List'
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
      ],
      isLoad: true,
      isLoading: false,
      books: []
    }
  },
  methods: {
    ...mapActions(['fetchRank']),
    async getList () {
      try {
        let { books } = await this.fetchRank()
        this.books = books
      } catch (err) {
        console.log(err)
      }
      this.isLoad = false
    },
    onRefresh () {
      this.getList()
      setTimeout(() => {
        this.isLoading = false
      }, 500);
    }
  },
  created () {
    if (!this.$store.state.topBooks.length) {
      this.getList()
    } else {
      this.books = this.$store.state.topBooks
      this.isLoad = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
</style>
