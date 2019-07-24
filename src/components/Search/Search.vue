<template>
  <div class="wrapper">
    <header>
      <span @click="$router.go(-1)">
        <IconSvg icon-class="jiantouzuo" />
      </span>
      <input type="text" id="searchInp" @input="handleInput" v-model="inp" @keypress.enter="handleSearch" placeholder="请输入关键字">
      <span class="searchBtn" @click="handleSearch">搜索</span>
    </header>
    <AutoComplete v-show="!books.length" :keywords="keywords" @tapword="handleSearch"></AutoComplete>
    <List :books="books"></List>
  </div>
</template>

<script>
import AutoComplete from './components/AutoComplete'
import List from '@/components/common/List'
import IconSvg from '@/components/common/IconSvg'
import { mapActions } from 'vuex'
import { debounce, memorize } from '@/utils/util'
export default {
  name: 'Search',
  components: {
    AutoComplete,
    List,
    IconSvg
  },
  data () {
    return {
      showList: false,
      cache: {},
      inp: '',
      raw: [],
      keywords: [],
      books: []
    }
  },

  methods: {
    ...mapActions(['queryWords', 'querySearch']),
    async getWords () {
      this.books = []
      let words = this.inp
      if (words) {
        this.raw = this.cache.get(words)
                        ? this.cache.get(words)
                        : await this.queryWords(words)
        this.keywords = this.raw.reduce((res, cur) => {
          res.push(cur.replace(words, `<span style="color: #f60">${ words }</span>`))
          return res
        }, [])
        this.cache.set(words, this.raw)
      } else {
        this.keywords = []
      }
    },
    handleInput () {},
    async handleSearch (index) {
      let word = "number" === typeof index ? this.raw[index] : this.inp
      this.books = await this.querySearch(word)
    }
  },

  created () {
    this.cache = new Map()
    this.handleInput = debounce(this.getWords)
    // const memorizeInput = memorize(this.getWords, this.setWords)
    // this.handleInput = debounce(e => {
    //   memorizeInput(e.target.value)
    // })
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  $headerHight: 40px;
  .wrapper {
    margin-top: 10px;
  }
  header {
    display: flex;
    justify-content: space-around;
    height: $headerHight;
    line-height: $headerHight;
    margin-bottom: 1em;
    span {
      font-weight: bold;
      font-size: 17px;
      color: #515254;
    }
    #searchInp {
      flex-grow: 1;
      margin: 0 1.2em;
      padding-left: .5em;
      border-radius: 10px;
      background: #e9eaec;
    }
    .searchBtn {
      font: bold 17px/40px 'Microsoft Yahei';
      color: #d14544;
    }
  }
</style>
