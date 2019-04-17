<template>
  <div>
    <section class="book-item-wrapper" v-swipeleft="swipeLeft" v-swiperight="swipeRight">
      <router-link :to="{ name: 'bookdetails', params: { id: book._id }}" class="fl">
        <img :src="book.cover" ref="bookCover" class="book-cover" alt="cover">
        <div class="book-info">
          <p><span class="book-title">{{ book.title }}</span>&nbsp;<timeago :datetime="book.updated"></timeago></p>
          <p class="book-author">{{ book.author }}&nbsp;&nbsp;著</p>
          <p class="book-chapter">{{ book.lastChapter }}</p>
        </div>
      </router-link>
      <button class="del-btn" ref="delBtn" @click="handleDelete">删除</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ShelfBook',
  props: ['book'],
  data () {
    return {
      hasLeft: false
    }
  },
  methods: {
    swipeLeft () {
      this.$refs.bookCover.style.position = 'absolute'
      this.$refs.bookCover.style.left = '-52px'
      this.$refs.bookCover.style.top = 0
      this.$refs.delBtn.style.right = 0
      this.hasLeft = true
    },

    swipeRight () {
      if (!this.hasLeft)  return
      this.$refs.bookCover.style.position = 'static'
      this.$refs.delBtn.style.right = '-77px'
      this.hasLeft = false
    },

    handleDelete () {
      alert('delete!!!')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  .book-item-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 1em;
    .book-cover {
      width: 45px;
      height: 60px;
      margin-right: 1em;
    }
    .book-info {
      width: 100%;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #f0f0f0;
      color: #000;
      .book-title {
        font: bold 15px 'Microsoft Yahei';
      }
      .book-author {
        font: lighter 12px 'YouYuan', 'STKaiti', 'SimSun';
      }
      .book-chapter {
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #6b6868;
      }
    }
    .del-btn {
      position: absolute;
      right: -77px;
      top: 0;
      width: 70px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-bottom: 1px solid #f0f0f0;
      color: #fff;
      background: #ff3b2f;
    }
  }
</style>
