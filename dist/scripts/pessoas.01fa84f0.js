;(function () {
  function $27bedf597d0171cc$var$toggleDetails(tr) {
    ;[...document.querySelectorAll('tr.detailable.open')]
      .filter((otherTr) => otherTr !== tr)
      .forEach((otherTr) => $27bedf597d0171cc$var$toggleDetails(otherTr))
    const button = tr.querySelector('button')
    button.textContent =
      button.textContent === 'Detalhes' ? 'Contrair' : 'Detalhes'
    tr.classList.toggle('open')
    tr.nextElementSibling.classList.toggle('open')
  }
  ;[...document.querySelectorAll('tr.detailable')].forEach((tr) => {
    tr.addEventListener('click', () => $27bedf597d0171cc$var$toggleDetails(tr))
  })
})()
