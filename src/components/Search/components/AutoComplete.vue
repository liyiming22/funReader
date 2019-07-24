<template>
  <div class="word-wrapper">
    <ul>
      <li v-for="(word, index) in keywords" :key="index">
        <span @click="$emit('tapword', index)" class="word" v-html="word"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    keywords: Array
  }
}
</script>

<style lang="scss" scoped>
  .word-wrapper {
    padding: 1em 0 0 2em;
    .word {
      font-size: 20px;
      line-height: 35px;
    }
  }
</style>
