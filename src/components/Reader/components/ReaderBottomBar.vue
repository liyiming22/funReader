<template>
  <div id="bottom-bar">
    <button class="menu-btn" @click="$emit('showChapter')">
      <IconSvg icon-class="mulu" />
      <span>目录</span>
    </button>
    <button class="menu-btn" @click="$emit('showSetting')">
      <IconSvg icon-class="shezhi" />
      <span>设置</span>
    </button>
    <button  class="menu-btn" @click="TOGGLE_NIGHT_MODE">
      <IconSvg v-if="isNight" icon-class="icon" />
      <IconSvg v-else icon-class="rijian" />
      <span v-if="isNight">夜间模式</span>
      <span v-else>日间模式</span>
    </button>
  </div>
</template>

<script>
import IconSvg from '@/components/common/IconSvg'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ReaderBottomBar',
  components: {
    IconSvg
  },
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
