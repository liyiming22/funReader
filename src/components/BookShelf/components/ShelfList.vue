<template>
  <div class="wrapper">
    <EmptyShelf v-if="!bookList.length"></EmptyShelf>
    <template v-else v-for="(book, index) in bookList">
      <ShelfBook :book="book" :index="index" :key="index"></ShelfBook>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyShelf from './EmptyShelf'
import ShelfBook from './ShelfBook'
export default {
  name: 'ShelfList',
  components: {
    EmptyShelf,
    ShelfBook
  },
  computed: {
    ...mapGetters({
      bookList: 'getShelfBookList'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
</style>
