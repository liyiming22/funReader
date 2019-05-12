<template>
  <div>
    <BookText
      :content="content"
      @loadNext="loadNext"
      :currIndex="currIndex">
    </BookText>
    <Chapter
      :chapters="chapters"
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
      chapters: [],
      content: [],
      currIndex: 0,
      bookId: ''
    }
  },

  watch: {
    chapters: function () {
      const link = this.chapters[this.currIndex].link
      this.readChapter(link)
    }
  },

  methods: {
    toggleChapter () {
      this.hideChapter = !this.hideChapter
    },

    async readChapter (link) {
      console.log('read')
      try {
        let chapter = await this.$store.dispatch('getContent', link)
        this.content.push({
          title: chapter.title,
          text: chapter.isVip ?
                ['Vip章节，请到正版网站阅读']
                : chapter.cpContent.split('\n')
        })
        console.log(this.content)
      } catch (error) {
        console.log(error)
      }
    },

    async getChapters () {
      try {
        this.chapters = await this.$store.dispatch('getChaptersById', this.bookId)
      } catch (error) {
        alert(error)
      }
    },

    loadNext () {
      if (this.currIndex == this.chapters.length - 1) return
      const link = this.chapters[++this.currIndex].link
      this.readChapter(link)
    }
  },

  created () {
    this.bookId = this.$route.params.id
    this.getChapters()
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
