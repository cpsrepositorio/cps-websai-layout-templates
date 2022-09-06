function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  })
}
var $parcel$global =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : {}
var $parcel$modules = {}
var $parcel$inits = {}

var parcelRequire = $parcel$global['parcelRequireea95']
if (parcelRequire == null) {
  parcelRequire = function (id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id]
      delete $parcel$inits[id]
      var module = { id: id, exports: {} }
      $parcel$modules[id] = module
      init.call(module.exports, module, module.exports)
      return module.exports
    }
    var err = new Error("Cannot find module '" + id + "'")
    err.code = 'MODULE_NOT_FOUND'
    throw err
  }

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init
  }

  $parcel$global['parcelRequireea95'] = parcelRequire
}
parcelRequire.register('cZBeF', function (module, exports) {
  var $905Zp = parcelRequire('905Zp')
  const appHeader = document.querySelector('.app-header')
  const mainContainer = document.querySelector('.internal-page > .max-width')
  if (!appHeader || !mainContainer) return
  const resizeObserver = new ResizeObserver((entries) =>
    entries.forEach(
      (entry) => entry.target.handleResize && entry.target.handleResize(entry)
    )
  )
  resizeObserver.observe(appHeader)
  appHeader.handleResize = (entry) => {
    var ref
    var ref1
    const headerHeight =
      (ref1 =
        (ref = entry.borderBoxSize[0]) === null || ref === void 0
          ? void 0
          : ref.blockSize) !== null && ref1 !== void 0
        ? ref1
        : 0
    const padding = parseFloat(
      window.getComputedStyle(mainContainer).paddingBottom
    )
    mainContainer.style.paddingTop = `${headerHeight + padding}px`
  }
  window.addEventListener(
    'scroll',
    (0, $905Zp.debounce)(() => {
      const scrolled = window.scrollY > 0
      appHeader.classList[scrolled ? 'remove' : 'add']('shadow-sm')
      appHeader.classList[scrolled ? 'add' : 'remove']('shadow-lg')
    })
  )
})
parcelRequire.register('905Zp', function (module, exports) {
  $parcel$export(module.exports, 'debounce', function () {
    return $68d8c288689cb773$export$61fc7d43ac8f84b0
  })
  function $68d8c288689cb773$export$de363e709c412c8a(callback, limit = 50) {
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
  function $68d8c288689cb773$export$61fc7d43ac8f84b0(callback, wait = 50) {
    let timeoutId = null
    return function (...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        callback.apply(this, args)
      }, wait)
    }
  }
})

parcelRequire('cZBeF')
const $7b782bc0bc9f7873$var$colorSchemeSelector =
  document.getElementById('color-scheme')
function $7b782bc0bc9f7873$var$isColorSchemeDark() {
  return document.documentElement.classList.contains('dark')
}
function $7b782bc0bc9f7873$var$updateColorScheme(theme) {
  localStorage['color-scheme'] = theme
  document.documentElement.classList.remove('light')
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add(theme)
  if ($7b782bc0bc9f7873$var$colorSchemeSelector) {
    if (theme === 'dark') {
      $7b782bc0bc9f7873$var$colorSchemeSelector
        .querySelector('.sunny')
        .classList.remove('hidden')
      $7b782bc0bc9f7873$var$colorSchemeSelector
        .querySelector('.moon')
        .classList.add('hidden')
      $7b782bc0bc9f7873$var$colorSchemeSelector.title = 'Modo claro'
    } else {
      $7b782bc0bc9f7873$var$colorSchemeSelector
        .querySelector('.sunny')
        .classList.add('hidden')
      $7b782bc0bc9f7873$var$colorSchemeSelector
        .querySelector('.moon')
        .classList.remove('hidden')
      $7b782bc0bc9f7873$var$colorSchemeSelector.title = 'Modo escuro'
    }
  }
}
function $7b782bc0bc9f7873$var$detectColorScheme() {
  let theme = 'light'
  if (localStorage['color-scheme']) theme = localStorage['color-scheme']
  else if (matchMedia && matchMedia('(prefers-color-scheme: dark)').matches)
    theme = 'dark'
  if ($7b782bc0bc9f7873$var$colorSchemeSelector)
    $7b782bc0bc9f7873$var$colorSchemeSelector.addEventListener('click', () => {
      if ($7b782bc0bc9f7873$var$isColorSchemeDark())
        $7b782bc0bc9f7873$var$updateColorScheme('light')
      else $7b782bc0bc9f7873$var$updateColorScheme('dark')
    })
  $7b782bc0bc9f7873$var$updateColorScheme(theme)
}
$7b782bc0bc9f7873$var$detectColorScheme()

;[...document.querySelectorAll('input[type="range"]')].forEach((input) => {
  input.dataset.value = input.value
  input.addEventListener('input', () => (input.dataset.value = input.value))
})
