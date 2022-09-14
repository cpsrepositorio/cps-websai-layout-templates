;[...document.querySelectorAll('select')].forEach((select) => {
  select.dataset.value = select.value
  select.addEventListener('change', () => (select.dataset.value = select.value))
})
