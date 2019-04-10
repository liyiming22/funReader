<template>
  <div class="wrapper">
    <h1>Hello Vue</h1>
    <div class="box"></div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hoooooooli!'
    }
  }
}
</script>

<style lang="scss">
  .box {
    width: 20px;
    height: 20px;
    background: #eeddee;
    border-radius: 50%;
    box-shadow: 2px 2px 2px #bfa;
  }
</style>
