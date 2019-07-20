<template>
  <ul id="book-list">
    <router-link
      v-for="book in books"
      :key="book._id"
      :to="{name: 'bookinfo', params: {id: book._id, book: book}}"
      tag="li"
    >
      <div class="book-cover">
        <img v-lazy="staticPath + book.cover" />
      </div>
      <div class="book-info">
        <h3 class="book-title">{{ book.title }}</h3>
        <h4 class="book-author">作者：{{ book.author }}</h4>
        <p class="book-des" style="-webkit-box-orient: vertical;">{{ book.shortIntro }}</p>
        <span class="book-cate" v-if="book.minorCate">{{ book.minorCate }}</span>
      </div>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    books: Array
  },
  data () {
    return {
      staticPath: 'http://statics.zhuishushenqi.com',
      listData: this.books,
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/common.scss";
@mixin singleline-text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@mixin multiline-text-ellipsis {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

#book-list {
  li {
    position: relative;
    display: flex;
    height: 120px;
    margin-top: 1em;
  }
  img {
    width: 90px;
    height: 120px;
  }
  .book-info {
    position: relative;
    text-align: left;
    padding-left: .8em;
    text-overflow: ellipsis;
    overflow: hidden;
    .book-title {
      font: bolder 18px/30px 'SimHei', 'Microsoft Yahei';
    }
    .book-author {
      font: 300 14px/26px 'Microsoft Yahei';
      color: #f60;
      margin: 0;
    }
    .book-des {
      @include multiline-text-ellipsis;
      font: lighter 12px/18px 'SimSun', 'NSimSun', 'FangSong', 'Microsoft Yahei';
      color: #999;
    }
    .book-cate {
      display: block;
      position: absolute;
      right: 0;
      top: 28px;
      padding: 4px;
      text-align: center;
      font: 600 12px 'Microsoft Yahei';
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
}
</style>
