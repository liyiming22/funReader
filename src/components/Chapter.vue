<template>
  <section class="chapter-box wrapper">
    <header class="chapter-header">
      <span class="book-title">
        <mu-icon value=":fas fa-chevron-down" @click="$emit('hideChapter')"></mu-icon>
        &nbsp;
        {{ currBook.title }}
      </span>
      <span class="second-title">
        <span>目录</span>
        <span @click="reverseChapter">
          <span v-if="this.normalOrder">
            <mu-icon value=":fas fa-sort-amount-up"></mu-icon>
            倒序
          </span>
          <span v-else>
            <mu-icon value=":fas fa-sort-amount-down"></mu-icon>
            正序
          </span>
        </span>
      </span>
    </header>
    <div class="chapter-list-wrapper">
      <ul class="chapter-list">
        <li
          v-for="(chapter, index) in chapterList"
          :key="chapter.id"
          @click="$emit('jumpChapter', chapter.link)"
          :class="['chapter-item', { active: index == currIndex }]">
          <span>{{ chapter.title }}</span>
          <span><mu-icon v-if="chapter.isVip" value=":fas fa-lock"></mu-icon></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { REVERSE_CHAPTER } from '@/store/mutation-types'
export default {
  name: 'Chapter',
  props: {
    chapters: {
      type: Array,
      default: []
    },
    currIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState([
      'chapterList',
      'currBook',
      'normalOrder'
    ])
  },
  methods: {
    ...mapMutations({
      reverseChapter: REVERSE_CHAPTER
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  .chapter-header {
    position: sticky;
    top: 0;
    left: 0;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
    .book-title {
      display: block;
      width: 100%;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
    }

    .second-title {
      height: 30px;
      line-height: 30px;
      & span:nth-child(1) {
        font: 400 18px/30px 'Microsoft Yahei';
      }
    }
  }

  .chapter-list-wrapper {
    .chapter-list {
      .chapter-item {
        display: flex;
        justify-content: space-between;
        padding: 1em 0 1em .25em;
        border-bottom: 1px solid #f1f1f1;
        color: #ababab;
      }
      .active {
        color: #4a4a4a;
      }
    }
  }
</style>
