class VueTouch {
  constructor (el, binding, type) {
    this.obj = el
    this.binding = binding
    this.type = type
    this.callback = binding.value

    this.initialPos = { x: 0, y: 0 }
    this.endPos = { x: 0, y: 0 }

    this.obj.addEventListener('touchstart', (e) => {
      this.start(e)
    }, false)

    this.obj.addEventListener('touchend', (e) => {
      this.end(e)
    }, false)

    // this.obj.addEventListener('touchstart', (e) => {
    //   this.start(e)
    // }, false)
  }

  start (e) {
    e.preventDefault()
    this.initialPos = this.figurePos(e.changedTouches)
  }

  end (e) {
    e.preventDefault()
    this.endPos = this.figurePos(e.changedTouches)
    let _distanceX = this.endPos.x - this.initialPos.x
    // let _distanceY = this.endPos.y - this.initialPos.y
    // let _distance = Math.sqrt(_distanceX * _distanceX + _distanceY * _distanceY)
    if (10 < Math.abs(_distanceX)) {
      if (0 > _distanceX) {
        this.type == 'swipeleft' && this.callback(e)
      } else {
        this.type == 'swiperight' && this.callback(e)
      }
    } else {
      console.log('undefined~')
    }
  }

  figurePos (dotsList) {
    let x = 0, y = 0
    const length = dotsList.length
    dotsList = [...dotsList]
    // console.log(dotsList)
    dotsList.forEach(dot => {
      x += dot.pageX
      y += dot.pageY
    })
    return {
      x: Math.round(x / length),
      y: Math.round(y / length)
    }
  }
}

const myTouchPlugin = {
  install: function (Vue, options) {
    Vue.directive('swipeleft', {
      bind: function(el, binding) {
        new VueTouch(el, binding, 'swipeleft')
      }
    })

    Vue.directive('swiperight', {
      bind: function(el, binding) {
        new VueTouch(el, binding, 'swiperight')
      }
    })
  }
}

export default myTouchPlugin