<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <p>刷新次数: {{ count }}</p>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
  </van-pull-refresh>

</template>

<script>
export default {
  data () {
    return {
      count: 0,
      isLoading: false,
      list: [],
      finished: false,
      loading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        alert('刷新成功～')
        this.isLoading = false
        ++this.count
      }, 500);
    },
    onLoad () {
      console.log('looooading...')
      setTimeout(() => {
        for (let i = 0; i < 10; ++i)
          this.list.push(this.list.length + 1)
        this.loading = false
        if (this.list.length >= 100)
          this.finished = true
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
