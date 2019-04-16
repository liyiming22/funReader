<template>
  <div>
    <img :src="book.cover" alt="cover">
    <!-- <div class="box"
      v-swipeleft="(e) => handleTouch('left', e)"
      v-swiperight="(e) => handleTouch('right', e)">
      {{ pos }}
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ShelfBook',
  props: ['book'],
  data () {
    return {
      pos: 'middle'
    }
  },
  methods: {
    handleTouch: function (msg, e) {
      this.pos = msg
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 60px;
    background: #bbffcc;
  }

  div {
    border-bottom: 1px solid #000;
    margin-bottom: 3px;
  }

  img {
    width: 45px;
    height: 60px;
  }
</style>
