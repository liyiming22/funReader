<template>
  <div>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <h1>这里是小说内容.....</h1>
    <!-- <BookText :id="this.$route.params.id"></BookText> -->
    <Chapter></Chapter>
  </div>
</template>

<script>
import BookText from '@/components/BookText'
import Chapter from '@/components/Chapter'
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'reader',
  components: {
    BookText,
    Chapter
  },

  data () {
    return {
    }
  },

  methods: {
    ...mapActions({
      queryChapters: 'getChaptersById'
    })
  },

  created () {
    this.queryChapters(this.$route.params.id)
  }
}
</script>
