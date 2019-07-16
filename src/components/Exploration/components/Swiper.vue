<template>
  <div class="swiper" ref="swiper">
    <div class="swiper-list"
      :style="{ width: swiperListWidth + 'px',
                transform: 'translateX(' + translateX + 'px)',
                transitionDuration: transitionDuration + 's' }"
      ref="swiperList">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      swiperWidth: '',
      index: 0,
      transitionDuration: .5,
      timer: '',
      startX: '',
      offset: ''
    }
  },
  props: {
    sum: {
      type: Number,
      required: true
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  computed: {
    swiperListWidth () {
      return this.swiperWidth * this.sum
    },
    translateX () {
      return this.index * this.swiperWidth * -1
    }
  },
  methods: {
    autoPlay () {
      this.timer = setInterval(() => {
        let index = this.index + 1
        this.index = index % this.sum
      }, this.time)
    },
    touchStart (e) {
      clearInterval(this.timer)
      this.transitionDuration = 0
      this.startX = e.targetTouches[0].clientX
    },
    touchMove (e) {
      this.offset = this.startX - e.targetTouches[0].clientX
      this.$refs.swiperList.style.transform = `translateX(${this.translateX - this.offset}px)`
    },
    touchEnd (e) {
      this.transitionDuration = .5
      let num = Math.round(this.offset / this.swiperWidth)
      let sum = this.index + num
      if (sum > this.sum - 1) {
        sum = 0
      } else if (0 > sum) {
        sum = this.sum - 1
      }
      if (sum === this.index) {
        this.$refs.swiperList.style.transform = `translateX(${this.translateX}px)`
      } else {
        this.index = sum
      }
      this.autoPlay()
    }
  },
  created () {
    this.$nextTick(() => {
      let swiper = this.$refs.swiper
      this.swiperWidth = swiper.offsetWidth
      this.autoPlay()
      swiper.addEventListener('touchstart', this.touchStart)
      swiper.addEventListener('touchmove', this.touchMove)
      swiper.addEventListener('touchend', this.touchEnd)
    })
  },
  beforeDestroy () {
    let swiper = this.$refs.swiper
    swiper.removeEventListener('touchstart', this.touchStart)
    swiper.removeEventListener('touchmove', this.touchMove)
    swiper.removeEventListener('touchend', this.touchEnd)
  }
}
</script>

<style lang="scss" scoped>
  .swiper {
    margin-top: 1em;
    overflow: hidden;
    .swiper-list {
        display: flex;
        transition-property: all;
        transition-timing-function: ease-in-out;
    }
    .swiper-item {
      width: 100%;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
