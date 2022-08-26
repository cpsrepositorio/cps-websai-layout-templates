;(function () {
  const $2143634baf2b4b8e$var$colorSchemeSelector =
    document.getElementById('color-scheme')
  function $2143634baf2b4b8e$var$isColorSchemeDark() {
    return document.documentElement.classList.contains('dark')
  }
  function $2143634baf2b4b8e$var$updateColorScheme(theme) {
    localStorage['color-scheme'] = theme
    document.documentElement.classList.remove('light')
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add(theme)
    if ($2143634baf2b4b8e$var$colorSchemeSelector) {
      if (theme === 'dark') {
        $2143634baf2b4b8e$var$colorSchemeSelector
          .querySelector('.sunny')
          .classList.remove('hidden')
        $2143634baf2b4b8e$var$colorSchemeSelector
          .querySelector('.moon')
          .classList.add('hidden')
        $2143634baf2b4b8e$var$colorSchemeSelector.title = 'Modo claro'
      } else {
        $2143634baf2b4b8e$var$colorSchemeSelector
          .querySelector('.sunny')
          .classList.add('hidden')
        $2143634baf2b4b8e$var$colorSchemeSelector
          .querySelector('.moon')
          .classList.remove('hidden')
        $2143634baf2b4b8e$var$colorSchemeSelector.title = 'Modo escuro'
      }
    }
  }
  function $2143634baf2b4b8e$var$detectColorScheme() {
    let theme = 'light'
    if (localStorage['color-scheme']) theme = localStorage['color-scheme']
    else if (matchMedia && matchMedia('(prefers-color-scheme: dark)').matches)
      theme = 'dark'
    if ($2143634baf2b4b8e$var$colorSchemeSelector)
      $2143634baf2b4b8e$var$colorSchemeSelector.addEventListener(
        'click',
        () => {
          if ($2143634baf2b4b8e$var$isColorSchemeDark())
            $2143634baf2b4b8e$var$updateColorScheme('light')
          else $2143634baf2b4b8e$var$updateColorScheme('dark')
        }
      )
    $2143634baf2b4b8e$var$updateColorScheme(theme)
  }
  $2143634baf2b4b8e$var$detectColorScheme()
})()
