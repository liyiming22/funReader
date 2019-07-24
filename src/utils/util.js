function debounce (fn, delay = 1000) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

function memorize (fn, callback) {
  const cache = new Map()
  return function (words) {
    // 没有任何输入，直接返回
    if (!words || '' == words) {
      return
    }
    const res = cache.get(words)
                ? cache.get(words)
                : fn.call(this, words)
    console.log(res)
    cache.set(words, res)
    callback.call(this, res)
  }
}

export { debounce, memorize }
