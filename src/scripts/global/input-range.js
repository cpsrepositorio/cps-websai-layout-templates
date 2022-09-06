;[...document.querySelectorAll('input[type="range"]')].forEach((input) => {
  input.dataset.value = input.value
  input.addEventListener('input', () => (input.dataset.value = input.value))
})
