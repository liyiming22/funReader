<template>
  <div>
    <BookText
      :content="content"
      @loadNext="loadNext"
      @toggleMenu="toggleMenu"
      :currIndex="currIndex">
    </BookText>
    <Chapter
      :chapters="chapters"
      @hideChapter="toggleChapter"
      @readChapter="readChapter"
      :class="['chapter', { 'hide-chapter': this.hideChapter }]">
    </Chapter>
    <div id="overlay" v-show="!this.hideChapter"></div>
    <ReaderTopBar :class="['top-bar', { 'hide-top': !this.triggered }]"></ReaderTopBar>
    <ReaderBottomBar :class="['bottom-bar', { 'hide-bottom': !this.triggered }]" @showChapter="toggleChapter"></ReaderBottomBar>
  </div>
</template>

<script>
import BookText from '@/components/BookText'
import Chapter from '@/components/Chapter'
import ReaderTopBar from '@/components/ReaderTopBar'
import ReaderBottomBar from '@/components/ReaderBottomBar'
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'reader',
  components: {
    BookText,
    Chapter,
    ReaderTopBar,
    ReaderBottomBar
  },

  data () {
    return {
      hideChapter: true,
      triggered: false,
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
    async getChapters () {
      try {
        this.chapters = await this.$store.dispatch('getChaptersById', this.bookId)
      } catch (error) {
        alert(error)
      }
    },
   
    async readChapter (link) {
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

    loadNext () {
      if (this.currIndex == this.chapters.length - 1) return
      const link = this.chapters[++this.currIndex].link
      this.readChapter(link)
    },
 
    toggleChapter () {
      this.hideChapter = !this.hideChapter
      this.triggered = false
    },

    toggleMenu () {
      this.triggered = !this.triggered
    }
  },

  created () {
    this.bookId = this.$route.params.id
    this.getChapters()
  }
}
</script>

<style scoped>
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    transition: all .2s ease-out;
  }

  .hide-top {
    top: -2.5em;
    left: 0;
  }

  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    transition: all .2s ease-out;
  }

  .hide-bottom {
    bottom: -3.5em;
    left: 0;
  }

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

  .hide-chapter {
    left: 0;
    bottom: -65%;
  }

  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .75);
  }
</style>
