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
            <mu-icon v-if="chapter.isVip" value=":fas fa-lock"></mu-icon>
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
    // height: 65%;
    height: 400px;
    overflow: auto;
    background: #f0f0f0;

    .chapter-header {
      border-bottom: 1px solid #f0f0f0;
      background: #bfa;
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
          .active {
            color: red;
          }
        }
      }
    }
  }
</style>
