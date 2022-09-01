export function throttle(callback, limit = 50) {
  let waiting = false
  return function (...args) {
    if (!waiting) {
      callback.apply(this, args)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, limit)
    }
  }
}

export function debounce(callback, wait = 50) {
  let timeoutId = null
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      callback.apply(this, args)
    }, wait)
  }
}
