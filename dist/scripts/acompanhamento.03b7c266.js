document
  .querySelector('a.card[href="#total"]')
  .addEventListener('click', function (event) {
    event.preventDefault()
    ;[...document.querySelectorAll('.card input[type="checkbox"]')].forEach(
      (tr) => tr.removeAttribute('checked')
    )
    this.querySelector('input[type="checkbox"]').setAttribute('checked', true)
    ;[
      ...document.querySelectorAll('table tbody tr:not(.highlighted)[hidden]')
    ].forEach((tr) => tr.removeAttribute('hidden'))
  })
document
  .querySelector('a.card[href="#pendentes"]')
  .addEventListener('click', function (event) {
    event.preventDefault()
    ;[...document.querySelectorAll('.card input[type="checkbox"]')].forEach(
      (tr) => tr.removeAttribute('checked')
    )
    this.querySelector('input[type="checkbox"]').setAttribute('checked', true)
    ;[
      ...document.querySelectorAll('table tbody tr:not(.highlighted)[hidden]')
    ].forEach((tr) => tr.removeAttribute('hidden'))
    ;[
      ...document.querySelectorAll(
        'table tbody tr:not(.highlighted) td:last-child:not([title="N\xe3o respondido"])'
      )
    ].forEach((td) => td.parentElement.toggleAttribute('hidden'))
  })
document
  .querySelector('a.card[href="#concluidos"]')
  .addEventListener('click', function (event) {
    event.preventDefault()
    ;[...document.querySelectorAll('.card input[type="checkbox"]')].forEach(
      (tr) => tr.removeAttribute('checked')
    )
    this.querySelector('input[type="checkbox"]').setAttribute('checked', true)
    ;[
      ...document.querySelectorAll('table tbody tr:not(.highlighted)[hidden]')
    ].forEach((tr) => tr.removeAttribute('hidden'))
    ;[
      ...document.querySelectorAll(
        'table tbody tr:not(.highlighted) td:last-child:not([title="Respondido"])'
      )
    ].forEach((td) => td.parentElement.toggleAttribute('hidden'))
  })
document.querySelector('a.card[href="#total"]').click()
document.querySelector('#exportar').addEventListener('click', () => {
  print()
})
