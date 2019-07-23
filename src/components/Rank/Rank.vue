<template>
  <div>
    <van-nav-bar :fixed="true" title="排行榜" left-arrow></van-nav-bar>
    <div class="wrapper">
      <van-tabs type="card" @click="changeSexual" class="sexual-card">
        <van-tab v-for="(item, n) in rankingTitle" :title="item.name" :key="n">
          <van-tabs @click="changeCate" id="ranking-tab">
              <van-tab v-for="(cate, index) in cateSet[item.id]" :key="index">
                <div slot="title" class="title">
                  {{ cate.title }}
                </div>
                <List :books="bookList" v-show="bookList" />
              </van-tab>
          </van-tabs>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import List from '@/components/common/List'
export default {
  name: 'Rank',
  components: {
    List
  },
  data () {
    return {
      rankingTitle: [
        {
          name: '男生频道',
          id: 'male',
          index: 0
        },

        {
          name: '女生频道',
          id: 'female',
          index: 0
        }
      ],
      cateSet: {},
      bookSet: [],
      queryMap: {},
      currentTab: 'male',
      cateList: [],
      bookList: []
    }
  },
  methods: {
    ...mapActions(['fetchRankCategory', 'fetchRank']),
    async getList (id) {
      let { books } = await this.fetchRank(id)
      this.bookList = books
      this.queryMap.set(id, this.bookSet.length)
      const obj = {
        _id: id,
        books: this.bookList
      }
      this.bookSet.push(obj)
    },
    initList () {
      this.getList(this.cateSet[this.currentTab][0]._id)
    },
    changeSexual (index) {
      console.log(index)
      this.currentTab = this.rankingTitle[index].id
      this.initList()
    },
    changeCate (index) {
      console.log(index)
      // 首先看看是不是已经查询过了，查询过的直接在缓存中返回
      let queryID = this.cateSet[this.currentTab][index]._id //  首先拿到 ID 值
      if (this.queryMap.has(queryID)) {   //  缓存中存在
        let index = this.queryMap.get(queryID)
        this.bookList = this.bookSet[index].books
      } else {    //  没有查询过
        this.getList(queryID)
      }
    }
  },
  async created () {
    this.queryMap = new Map()
    this.cateSet = this.$store.state.cateSet
    this.cateSet = Object.keys(this.cateSet).length   //  判断对象是否为空
                 ? this.cateSet
                 : await this.fetchRankCategory()
    console.log(this.cateSet)
    this.initList()
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/common.scss';
  .sexual-card {
    margin-top: 46px;
  }
</style>
