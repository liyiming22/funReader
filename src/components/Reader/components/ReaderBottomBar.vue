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
    <button  class="menu-btn" @click="TOGGLE_NIGHT_MODE">
      <mu-icon v-if="isNight" value=":fas fa-moon"></mu-icon>
      <mu-icon v-else value=":fas fa-sun"></mu-icon>
      <span v-if="isNight">夜间模式</span>
      <span v-else>日间模式</span>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ReaderBottomBar',
  methods: {
    ...mapMutations(['TOGGLE_NIGHT_MODE'])
  },
  computed: {
    ...mapState(['isNight'])
  }
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
