<template>
  <div>
    <van-nav-bar :fixed="true" title="分类"></van-nav-bar>
    <section class="cate-wrapper">
      <CateGrid v-for="category in categories" :key="category.gender" :category="category"></CateGrid>
    </section>
  </div>
</template>

<script>
import CateGrid from './components/CateGrid'
import { mapMutations, mapActions } from 'vuex'
import { SET_CATEGORY } from '@/store/mutation-types'
export default {
  name: 'Category',
  components: {
    CateGrid
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    ...mapMutations({
      'setCategory': SET_CATEGORY
    }),
    ...mapActions(['getCategory']),
    async initCategory () {
      const map = new Map([
        ['male', '男生'],
        ['female', '女生'],
        ['press', '出版']
      ])
      const res = await this.getCategory()
      for (let [key, val] of Object.entries(res)) {
        if (map.has(key)) {
          const obj = {}
          obj.title = map.get(key)
          obj.gender = key
          obj.gridList = val
          this.categories.push(obj)
        }
      }
      this.setCategory(this.categories)
    }
  },
  created () {
    if (!this.$store.state.category.length) {
      this.initCategory()
    } else {
      this.categories = this.$store.state.category
    }
  }
}
</script>

<style lang="scss" scoped>
  .cate-wrapper {
    margin-top: 46px;
  }
</style>
