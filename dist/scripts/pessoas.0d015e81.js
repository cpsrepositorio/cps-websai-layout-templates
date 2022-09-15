function $53e7c8af7598f0d0$var$toggleDetails(tr) {
  ;[...document.querySelectorAll('tr.detailable.open')]
    .filter((otherTr) => otherTr !== tr)
    .forEach((otherTr) => $53e7c8af7598f0d0$var$toggleDetails(otherTr))
  const button = tr.querySelector('button')
  button.textContent =
    button.textContent === 'Detalhes' ? 'Contrair' : 'Detalhes'
  tr.classList.toggle('open')
  tr.nextElementSibling.classList.toggle('open')
}
;[...document.querySelectorAll('tr.detailable')].forEach((tr) => {
  tr.addEventListener('click', () => $53e7c8af7598f0d0$var$toggleDetails(tr))
})
