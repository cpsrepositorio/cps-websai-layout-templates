const colorSchemeSelector = document.getElementById('color-scheme')

function isColorSchemeDark() {
  return document.documentElement.classList.contains('dark')
}

function updateColorScheme(theme) {
  localStorage['color-scheme'] = theme

  document.documentElement.classList.remove('light')
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add(theme)

  if (colorSchemeSelector) {
    if (theme === 'dark') {
      colorSchemeSelector.querySelector('.sunny').classList.remove('hidden')
      colorSchemeSelector.querySelector('.moon').classList.add('hidden')
      colorSchemeSelector.title = 'Modo claro'
    } else {
      colorSchemeSelector.querySelector('.sunny').classList.add('hidden')
      colorSchemeSelector.querySelector('.moon').classList.remove('hidden')
      colorSchemeSelector.title = 'Modo escuro'
    }
  }
}

function detectColorScheme() {
  let theme = 'light'

  if (localStorage['color-scheme']) {
    theme = localStorage['color-scheme']
  } else if (matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
  }

  if (colorSchemeSelector) {
    colorSchemeSelector.addEventListener('click', () => {
      if (isColorSchemeDark()) {
        updateColorScheme('light')
      } else {
        updateColorScheme('dark')
      }
    })
  }

  updateColorScheme(theme)
}

detectColorScheme()
