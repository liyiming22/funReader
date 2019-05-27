<template>
  <div id="bottom-bar">
    <button class="menu-btn" @click="$emit('showChapter')">
      <mu-icon value=":fas fa-bars"></mu-icon>
      <span>目录</span>
    </button>
    <button class="menu-btn" @click="$emit('showSetting')">
      <mu-icon value=":fas fa-cog"></mu-icon>
      <span>设置</span>
    </button>
    <button class="menu-btn">
      <mu-icon value=":fas fa-sun"></mu-icon>
      <span>日间模式</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ReaderBottomBar'
}
</script>

<style lang="scss" scoped>
  #bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.5em;
    padding: 0 1em;
    background: #fff;
    .menu-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        line-height: 1;
        margin-top: .5em;
      }
    }
  }
</style>
