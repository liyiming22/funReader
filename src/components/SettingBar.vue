<template>
  <div id="setting-bar">
    <div class="color-picker">
      <div
        v-for="skin in skinList"
        :key="skin"
        @click=pickColor(skin)
        :class="[skin]">
      </div>
    </div>
    <div class="font-wrapper">
      <button>Aa-</button>
      <button>Aa+</button>
    </div>
  </div>
</template>

<script>
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
    }
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
    }
  }
</style>
