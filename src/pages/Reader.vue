<template>
  <div>
    <BookText :content="content"></BookText>
    <Chapter
      @toggleChapter="toggleChapter"
      @readChapter="readChapter"
      :class="['chapter', { hide: this.hideChapter }]">
    </Chapter>
    <div class="overlay" v-show="!this.hideChapter"></div>
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
      hideChapter: false,
      // content: [],
      content: ''
      // currIndex: 0
    }
  },

  methods: {
    ...mapActions({
      queryChapters: 'getChaptersById',
    }),

    toggleChapter () {
      this.hideChapter = !this.hideChapter
    },

    async readChapter (link) {
      console.log('read')
      try {
        const thisContent = await this.$store.dispatch('getContent', link)
        this.content = thisContent
      } catch (error) {
        console.log(error)
      }
    }
  },

  created () {
    this.queryChapters(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
  .chapter {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 65%;
    z-index: 999;
    overflow: auto;
    background: #fff;
    transition: all .2s;
  }

  .hide {
    left: 0;
    bottom: -65%;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .75);
  }
</style>
