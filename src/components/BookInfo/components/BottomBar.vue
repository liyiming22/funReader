<template>
  <div class="button-bar">
    <div class="addBtn" @click="addBook">
      <p><IconSvg icon-class="jiarushujia-h" class="icon" /></p>
      <p v-if="isAdded">已经加入书架</p>
      <p v-else>加入书架</p>
    </div>
    <div class="readBtn">
      <p>立即阅读</p>
    </div>
  </div>
</template>

<script>
import IconSvg from '@/components/common/IconSvg'
import { mapMutations } from 'vuex'
import { ADD_BOOK } from '@/store/mutation-types'
export default {
  props: {
    book: Object
  },
  components: {
    IconSvg
  },
  computed: {
    isAdded () {
      console.log(this.book._id)
      return -1 !== this.$store.state.bookShelf.findIndex(el => el._id === this.book._id)
    }
  },
  methods: {
    ...mapMutations({
      addToShelf: ADD_BOOK,
    }),
    addBook () {
      if (this.isAdded)  return
      this.addToShelf(this.book)
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-bar {
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    & > div {
      width: 50%;
      height: 55px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font: 300 14px/18px 'Microsoft Yahei';
      border-top: 1px solid #f0f0f0;
      color: #999;
    }

    & > div:nth-of-type(2) {
      background: #fa003c;
      color: #fff;
    }
  }
</style>
