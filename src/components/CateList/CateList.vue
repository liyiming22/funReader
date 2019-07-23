<template>
  <div>
    <van-nav-bar :title="this.$route.params.major" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="wrapper">
      <List :books="books" class="book-list"></List>
    </div>
  </div>
</template>

<script>
import List from '@/components/common/List'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      set: {'男生': 'male', '女生': 'female', '出版': 'press'},
      payload: {},
      books: []
    }
  },
  components: {
    List
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    ...mapActions(['queryCateInfo']),
    async getBook () {
      let { books } = await this.queryCateInfo(this.payload)
      this.books = books
    }
  },
  created () {
    let gender = this.set[this.$route.params.gender]
    let major = this.$route.params.major
    this.payload.gender = gender
    this.payload.major = major
    this.getBook()
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/common.scss';
</style>
