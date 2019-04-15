<template>
  <div>
    <img :src="book.cover" alt="cover">
  </div>
</template>

<script>
export default {
  name: 'ShelfBook',
  props: ['book']
}
</script>

<style lang="scss" scoped>
  div {
    border-bottom: 1px solid #000;
    margin-bottom: 3px;
  }

  img {
    width: 45px;
    height: 60px;
  }
</style>
