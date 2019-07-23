<template>
  <section>
    <van-nav-bar :fixed="true" :left-arrow="true" :title="book.title" left-text="返回" @click-left="goBack"></van-nav-bar>
    <div class="wrapper">
      <div id="info-header">
        <div class="book-cover">
          <img :src="staticPath + book.cover" alt="cover">
        </div>
        <div class="book-info">
          <h3 class="book-title">{{ book.title }}</h3>
          <h4 class="book-author">作者：{{ book.author }}</h4>
          <p>
            <timeago :datetime="detail.updated"></timeago>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>{{ Math.floor(detail.wordCount / 10000) }}万字</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>{{ book.minorCate }}</span>
          </p>
        </div>
      </div>
      <div class="book-status">
				<div class="list-item">
					<span>追书人气</span>
					<span>{{ book.latelyFollower }}</span>
				</div>
				<div class="list-item">
					<span>读者留存率</span>
					<span>{{ book.retentionRatio }}%</span>
				</div>
				<div class="list-item">
					<span>日更新字数</span>
					<span>{{ detail.serializeWordCount }}</span>
				</div>
			</div>
      <div class="book-tag">
				<span v-for="(tag, index) in detail.tags" :key="index" class="tag">{{ tag }}</span>
			</div>
      <p class="book-intro">{{ book.shortIntro }}</p>
    </div>
    <BottomBar :book="detail"></BottomBar>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import BottomBar from './components/BottomBar'
export default {
  name: 'BookInfo',
  data () {
    return {
      book: {},
      detail: {},
      staticPath: 'http://statics.zhuishushenqi.com',
    }
  },
  components: {
    BottomBar
  },
  methods: {
    goBack () {
      this.$router.replace('/explore')
    },
    ...mapActions([
      'getBookInfo'
    ])
  },
  async created () {
    this.book = this.$route.params.book
    this.detail = await this.getBookInfo(this.book._id)
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  .wrapper {
    margin-top: 5em;
  }
  #info-header {
    display: flex;
    img {
      width: 90px;
      height: 120px;
    }
    .book-info {
      text-align: left;
      padding-left: .8em;
      text-overflow: ellipsis;
      overflow: hidden;
      .book-title {
        font: bolder 20px/30px 'SimHei', 'Microsoft Yahei';
      }
      .book-author {
        font: 300 18px/26px 'Microsoft Yahei';
        color: #f60;
        margin: .8em 0;
      }
      p {
        font: 500 16px/18px 'SimHei', 'Microsoft Yahei';
      }
    }
  }
  .book-status {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2em;
    padding: .6em 0 .3em 0;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    .list-item {
      display: flex;
      flex-direction: column;
      width: 33%;
      text-align: center;
      span:nth-of-type(1) {
        font-size: 1.6em;
        color: #807070;
      }
      span:nth-of-type(2) {
        font-size: 1.5em;
        color: #000;
      }
    }
  }

  .book-tag {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2em 1.2em 1.2em 1.2em;
    border-bottom: 1px solid #f2f2f2;
  }

  .book-intro {
    margin-top: 1em;
    font: 550 18px/22px 'SimHei', 'Microsoft Yahei';
  }
</style>
