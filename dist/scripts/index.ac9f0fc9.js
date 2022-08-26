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
