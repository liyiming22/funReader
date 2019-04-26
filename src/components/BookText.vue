<template>
  <section :class="[skin, { night: isNight }]">
    <section class="articles-wrapper">
      <header class="book-name">{{ currBook.title }}</header>
      <article v-for="chapter in content" :key="chapter.title" v-if="0 < content.length">
        <h3 class="chapter-title">{{ chapter.title }}</h3>
        <p v-for="(item, index) in chapter.text" :key="index">{{item}}</p>
        <button class="nextBtn" @click="$emit('loadNext')">加载下一章</button>
      </article>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Booktext',
  props: {
    content: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['currBook', 'skin', 'isNight'])
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  .night {
    background: #000;
    color: #646464;
  }
  
  .articles-wrapper {
    .book-name {
      position: fixed;
      top: 0;
      height: 0;
      width: 100%;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background: #fff;
      color: #7a776f;
    }
    article {
      margin-top: 20px;
      text-indent: 2em;
      h3 {
        font: bolder 21px 'Microsoft JhengHei', 'SimHei', 'Microsoft Yahei', 'SimSun';
      }
      p {
        margin-bottom: 1.5em;
        font: 550 15px 'YouYuan', 'Microsoft Yahei';
      }
      .nextBtn {
        display: block;
        width: 80%;
        margin-bottom: 1em;
        padding: .5em 0;
        transform: translateX(10%);
        font-size: 17px;
        border-radius: 100px;
        color: #fff;
        background: #dd261e;
      }
    }
  }
</style>
