<template>
  <div class="wrapper">
    <h1>Welcome to your book shelf!</h1>
    <ShelfList></ShelfList>
  </div>
</template>

<script>
import ShelfList from '@/components/ShelfList'
export default {
  name: 'BookShelf',
  components: {
    ShelfList
  },
}
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 0 .5em;
  }

  h1 {
    text-align: center;
  }
</style>
