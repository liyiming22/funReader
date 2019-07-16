<template>
  <div id="setting-bar">
    <div class="color-picker">
      <div
        v-for="skin in skinList"
        :key="skin"
        @click="CHANGE_SKIN(skin)"
        :class="[skin, { active: skin === $store.state.skin }]">
      </div>
    </div>
    <div class="font-wrapper">
      <button @click="ZOOM_OUT" :class="{ disabled: 10 >= $store.state.fontSize }">Aa-</button>
      <button @click="ZOOM_IN" :class="{ disabled: 26 <= $store.state.fontSize }">Aa+</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { CHANGE_SKIN, ZOOM_IN, ZOOM_OUT } from '@/store/mutation-types'
export default {
  name: 'SettingBar',
  data () {
    return {
      skinList: ['default', 'creamy-white', 'bean-green', 'light-pink', 'dark']
    }
  },
  methods: {
    pickColor (skin) {
      console.log(skin)
    },
    ...mapMutations([
      CHANGE_SKIN,
      ZOOM_IN,
      ZOOM_OUT
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  $pickerSize: 40px;
  $btnWidth: 80px;
  $btnHeight: 35px;
  #setting-bar {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 8em;
    padding: 0 2em;
    background: #fff;
    .color-picker {
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding: 1em 0 .5em 0;
      div {
        width: $pickerSize;
        height: $pickerSize;
        border-radius: 50%;
      }
      .active {
        border: 2px solid #f7f2b9;
      }
    }
    .font-wrapper {
      display: flex;
      justify-content: space-between;
      padding: .4em 2.5em;
      button {
        width: $btnWidth;
        height: $btnHeight;
        line-height: $btnHeight;
        font-weight: bolder;
        background: #bbf;
      }
      .disabled {
        background: #a29f9f;
      }
    }
  }

</style>
