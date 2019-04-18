<template>
  <div>
    <ShelfHeader></ShelfHeader>
    <ShelfList></ShelfList>
  </div>
</template>

<script>
import ShelfList from '@/components/ShelfList'
import ShelfHeader from '@/components/ShelfHeader'
export default {
  name: 'BookShelf',
  components: {
    ShelfList,
    ShelfHeader
  },
}
</script>

<style lang="scss" scoped>
</style>
