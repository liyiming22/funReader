<template>
  <section class="grid-wrapper">
    <h3 class="cat-title">{{ category.title }}</h3>
    <ul class="cat-list">
      <li v-for="item in category.gridList" :key="item.name" class="cat-item">
        <router-link :to="{ name: 'explore'}">
          <p class="cat-name">{{ item.name }}</p>
          <p class="cat-count">{{ item.bookCount }}本</p>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    category: Object
  }
}
</script>

<style lang="scss" scoped>
  @mixin two-border {
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
  }
  @mixin one-border {
    border-top: 1px solid #f0f0f0;
  }

  .grid-wrapper {
    .cat-title {
      padding: 1em 0;
      text-indent: 1em;
      font: 500 18px/30px 'Microsoft Yahei';
    }
    .cat-list {
      display: flex;
      flex-wrap: wrap;
      .cat-item {
        width: 33.3%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        &:nth-child(3n + 1) { @include two-border; }
        &:nth-child(3n + 2) { @include two-border; }
        &:nth-child(3n + 3) { @include two-border; }
        &:nth-child(1) { @include one-border; }
        &:nth-child(2) { @include one-border; }
        &:nth-child(3) { @include one-border; }
        .cat-name {
          font-size: 16px;
          color: #333;
        }
        .cat-count {
          font-size: 12px;
          color: #ccc;
        }
      }
    }
  }
</style>
