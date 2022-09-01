import { debounce } from './utils.js'

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
  const headerHeight = entry.borderBoxSize[0]?.blockSize ?? 0
  const padding = parseFloat(
    window.getComputedStyle(mainContainer).paddingBottom
  )

  mainContainer.style.paddingTop = `${headerHeight + padding}px`
}

window.addEventListener(
  'scroll',
  debounce(() => {
    const scrolled = window.scrollY > 0
    appHeader.classList[scrolled ? 'remove' : 'add']('shadow-sm')
    appHeader.classList[scrolled ? 'add' : 'remove']('shadow-lg')
  })
)
