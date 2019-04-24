<template>
  <div class="wrapper">
    <SearchBar></SearchBar>
    <h1>This is exploration page</h1>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
export default {
  name: 'Explore',
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
</style>
