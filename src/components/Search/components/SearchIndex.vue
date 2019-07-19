<template>
  <div>
    <section class="hot-key">
      <header class="second-title">
        <span>搜索热词</span>
        <span @click="$router.replace('/')">
          查看更多
          &nbsp;
        </span>
      </header>
      <ul class="hot-key-list">
        <li class="hot-key-item" v-for="keyWord in hotKeys" :key="keyWord.word">
          <router-link to="/">
            {{ keyWord.word }}
          </router-link>
        </li>
      </ul>
    </section>
    <section class="hot-recommend">
      <header class="second-title">
        <span>热门推荐</span>
        <span @click="$router.replace('/')">
          换一批
          &nbsp;
        </span>
      </header>
      <ul>
        <li class="hot-book-item" v-for="book in hotBooks" :key="book">
          <router-link to="/">
            {{ book }}
          </router-link>
        </li>
      </ul>
    </section>
    <section class="search-history">
      <header class="second-title">
        <span>搜索历史</span>
        <span @click="$router.replace('/')">
          删除历史
          &nbsp;
        </span>
      </header>
      <ul>
        <li class="search-history-item" v-for="record in searchHistory" :key="record">
          <router-link to="/">
            {{ record }}
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SearchIndex',
  data () {
    return {
      hotKeys: [
        {
          "word": "系统",
          "times": 2050,
          "isNew": 0,
          "soaring": 0
        },
        {
          "word": "重生",
          "times": 1845,
          "isNew": 0,
          "soaring": 0
        },
        {
          "word": "快穿",
          "times": 1154,
          "isNew": 0,
          "soaring": 4
        },
        {
          "word": "火影",
          "times": 1150,
          "isNew": 0,
          "soaring": 1
        },
        {
          "word": "都市",
          "times": 1130,
          "isNew": 0,
          "soaring": -1
        },
        {
          "word": "斗罗大陆",
          "times": 1103,
          "isNew": 0,
          "soaring": 0
        },
        {
          "word": "末世",
          "times": 1002,
          "isNew": 0,
          "soaring": 1
        },
        {
          "word": "三国",
          "times": 991,
          "isNew": 0,
          "soaring": -5
        },
        {
          "word": "穿越",
          "times": 883,
          "isNew": 0,
          "soaring": 0
        },
        {
          "word": "斗破苍穹",
          "times": 876,
          "isNew": 0,
          "soaring": 4
        },
        {
          "word": "唐家三少",
          "times": 819,
          "isNew": 0,
          "soaring": 2
        },
        {
          "word": "洪荒",
          "times": 811,
          "isNew": 0,
          "soaring": 0
        },
      ],
      hotBooks: ['武道进化', '天荒仙庭', '御天邪神', '九界至尊', '超级武神', '地府代理人'],
      searchHistory: ['武道进化', '天荒仙庭', '御天邪神', '九界至尊', '超级武神', '地府代理人']
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/common.scss";
  $lineColor: #ebebeb;
  $linkColor: #6c6d6f;
  ul li a {
    color: $linkColor;
  }

  .hot-key {
    .hot-key-list {
      padding: 0 .5em;
      .hot-key-item {
        display: inline-block;
        padding: .25em .5em;
        margin: .25em;
        border: 1px solid #eaedec;
        border-radius: 1em;
        font: 300 14px 'Microsoft Yahei';
      }
    }
  }

  .hot-recommend {
    margin-top: 1.5em;
    padding-bottom: .5em;
    border-top: 1px solid $lineColor;
    border-bottom: 1px solid $lineColor;
    .hot-book-item {
      display: inline-block;
      width: 50%;
      padding: .5em .5em .5em 0;
    }

  }

  .search-history {
    .search-history-item {
      margin-bottom: .5em;
    }
  }
</style>
