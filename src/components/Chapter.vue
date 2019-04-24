<template>
    <section class="chapter-box wrapper" v-show="showChapter">
      <header class="chapter-header">
        <span class="book-title">
          <mu-icon value=":fas fa-chevron-down" @click="hideChapter"></mu-icon>
          &nbsp;
          {{ currBook.title }}
        </span>
        <span class="second-title">
          <span>目录</span>
          <span>
            <mu-icon value=":fas fa-sort-amount-up"></mu-icon>
            倒序
          </span>
        </span>
      </header>
      <div class="chapter-list-wrapper">
        <ul class="chapter-list">
          <li
            v-for="chapter in chapterList"
            :key="chapter.id"
            @click="readChapter(chapter.id)"
            :class="['chapter-item', { active: chapter.id == currBook.activeID }]"
          >
            <span>{{ chapter.title }}</span>
            <span><mu-icon v-if="chapter.isVip" value=":fas fa-lock"></mu-icon></span>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Chapter',
  data () {
    return {
      showChapter: true
    }
  },
  computed: {
    ...mapState([
      'chapterList',
      'currBook'
    ])
  },
  methods: {
    hideChapter () {
      alert('hide!')
    },
    readChapter (id) {
      alert(`Reading ${ id }!`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  .assistor-wrapper {
    position: relative;
    width: 100%;
    height: 400px;
    background: red;
  }

  .chapter-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
    height: 65%;
    overflow: auto;
    background: #fff;

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
  }
</style>
