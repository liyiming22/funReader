<template>
  <div>
    <EmptyShelf v-if="!bookList.length"></EmptyShelf>
    <template v-else v-for="(book, index) in bookList">
      <ShelfBook :book="book" :key="index"></ShelfBook>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyShelf from '@/components/EmptyShelf'
import ShelfBook from '@/components/ShelfBook'
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
