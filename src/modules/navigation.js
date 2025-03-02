const radioButtons = document.querySelectorAll('.form__input');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', (e) => {
    if (radioButton.checked) {
      document.querySelector('.form__link').href = e.target.value;
    }
  });
});
