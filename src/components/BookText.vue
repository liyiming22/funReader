<template>
  <article :class="[skin, { night: isNight }]">
    <header>
      {{currBook.title}}
    </header>
    <p>{{ content }}</p>
  </article>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Booktext',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['currBook', 'skin', 'isNight'])
  }
}
</script>

<style lang="scss" scoped>
  .night {
    background: #000;
    color: #646464;
  }

  header {
    position: fixed;
    top: 0;
    height: 0;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    // background: #bfa;
  }
</style>
