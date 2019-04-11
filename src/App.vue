<template>
  <div id="app">
    <router-view/>
    <div class="overlay" v-show="showAnimation">
      <div class="loading-spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNavigation'
export default {
  name: 'App',
  components: {
    BottomNav
  },
  data () {
    return {
      showAnimation: false
    }
  }
}
</script>

<style lang="scss">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .6);
    .loading-spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .overlay .loading-spinner .dot {
    position: absolute;
    width: 8px;
    height: 8px;
    line-height: 8px;
    text-align: center;
    border-radius: 50%;
    background: #000;
  }

  .loading-spinner .dot:first-child {
    top: 0;
    left: 0;
    animation: loading-dot-one 5s ease infinite;
    background: #f9e610;
  }

  .loading-spinner .dot:nth-child(2) {
    top: 0;
    left: 14px;
    animation: loading-dot-two 5s ease 0.4166666666666s infinite;
    background: #efdb06;
  }

  .loading-spinner .dot:nth-child(3) {
    top: 14px;
    left: 14px;
    animation: loading-dot-three 5s ease 0.83333333333s infinite;
    background: #dbc906;
  }

  @keyframes loading-dot-one {
    0% {
      top  : 0;
      left : 0;
    }

    8.3333333333% {
      top  : 14px;
      left : 0;
    }

    25% {
      top  : 14px;
      left : 0;
    }

    33.3333333333% {
      top  : 14px;
      left : 14px;
    }

    50% {
      top  : 14px;
      left : 14px;
    }

    58.3333333333% {
      top  : 0;
      left : 14px;
    }

    75% {
      top  : 0;
      left : 14px;
    }

    83.3333333333% {
      top  : 0;
      left : 0;
    }
  }

  @keyframes loading-dot-two {
    0% {
      top  : 0;
      left : 14px;
    }

    8.3333333333% {
      top  : 0;
      left : 0;
    }

    25% {
      top  : 0;
      left : 0;
    }

    33.3333333333% {
      top  : 14px;
      left : 0;
    }

    50% {
      top  : 14px;
      left : 0;
    }

    58.3333333333% {
      top  : 14px;
      left : 14px;
    }

    75% {
      top  : 14px;
      left : 14px;
    }

    83.3333333333% {
      top  : 0;
      left : 14px;
    }
  }

  @keyframes loading-dot-three {
    0% {
      top  : 14px;
      left : 14px;
    }

    8.3333333333% {
      top  : 0;
      left : 14px;
    }

    25% {
      top  : 0;
      left : 14px;
    }

    33.3333333333% {
      top  : 0;
      left : 0;
    }

    50% {
      top  : 0;
      left : 0;
    }

    58.3333333333% {
      top  : 14px;
      left : 0;
    }

    75% {
      top  : 14px;
      left : 0;
    }

    83.3333333333% {
      top  : 14px;
      left : 14px;
    }
  }
</style>
