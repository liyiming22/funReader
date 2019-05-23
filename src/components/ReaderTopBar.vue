<template>
  <div class="bar fl">
    <span @click="$router.go(-1)">
      <mu-icon value=":fas fa-chevron-left"></mu-icon>
    </span>
    <span>{{ currBook.title }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ReaderTopBar',
  computed: {
    ...mapState(['currBook'])
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  $barHeight: 2.5em;
  .bar {
    width: 100%;
    height: $barHeight;
    line-height: $barHeight;
    font-size: 1.25em;
    background: #fff;
    span:nth-child(1) {
      margin-left: 1em;
      color: #636363;
    }
    span:nth-child(2) {
      margin-left: .8em;
      font-weight: bolder;
    }
  }
</style>
