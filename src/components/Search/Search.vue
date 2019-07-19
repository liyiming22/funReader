<template>
  <div class="wrapper">
    <header>
      <span @click="$router.go(-1)">
        <IconSvg icon-class="jiantouzuo" />
      </span>
      <input type="text" name="searchInp" id="searchInp" :placeholder="randomHotKey" v-model="inpValue">
      <span class="searchBtn" @click="handleSearch">搜索</span>
    </header>
    <!-- <hr> -->
    <div class="search-wrapper">
      <SearchIndex v-if="'empty' == inpStatus"></SearchIndex>
      <Blurred v-else-if="'pending' == inpStatus"></Blurred>
      <SearchRes v-else></SearchRes>
    </div>
  </div>
</template>

<script>
import IconSvg from '@/components/common/IconSvg'
import SearchIndex from './components/SearchIndex'
import Blurred from './components/BlurredSearch'
import SearchRes from './components/SearchRes'
export default {
  name: 'Search',
  components: {
    SearchIndex,
    Blurred,
    SearchRes,
    IconSvg
  },
  data () {
    return {
      randomHotKey: '重生之都市仙尊',
      inpValue: '',
      inpStatus: 'empty'
    }
  },
  methods: {
    handleSearch () {
      alert(this.inpValue)
    }
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
  hr {
    background-color: #fcfcfc;
  }
  .search-wrapper {
    width: 100%;
    border-top: 1px solid #ebebeb;
  }
</style>
