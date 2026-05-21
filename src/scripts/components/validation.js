const showError = (input, msg, cfg) => {
  input.classList.add(cfg.inputErrorClass);
  const err = document.getElementById(`${input.id}-error`);
  err.textContent = msg;
  err.classList.add(cfg.errorClass);
};

const hideError = (input, cfg) => {
  input.classList.remove(cfg.inputErrorClass);
  const err = document.getElementById(`${input.id}-error`);
  err.textContent = '';
  err.classList.remove(cfg.errorClass);
};

const checkInput = (input, cfg) => {
  if (input.validity.patternMismatch) {
    showError(input, input.dataset.errorMessage, cfg);
  } else if (!input.validity.valid) {
    showError(input, input.validationMessage, cfg);
  } else {
    hideError(input, cfg);
  }
};

const updateButton = (inputs, btn, cfg) => {
  const invalid = inputs.some((i) => !i.validity.valid);
  btn.disabled = invalid;
  btn.classList.toggle(cfg.inactiveButtonClass, invalid);
};

const setListeners = (form, cfg) => {
  const inputs = [...form.querySelectorAll(cfg.inputSelector)];
  const btn = form.querySelector(cfg.submitButtonSelector);
  updateButton(inputs, btn, cfg);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkInput(input, cfg);
      updateButton(inputs, btn, cfg);
    });
  });
};

export const enableValidation = (cfg) => {
  document.querySelectorAll(cfg.formSelector).forEach((form) => {
    form.addEventListener('submit', (e) => e.preventDefault());
    setListeners(form, cfg);
  });
};

export const clearValidation = (form, cfg) => {
  const inputs = [...form.querySelectorAll(cfg.inputSelector)];
  const btn = form.querySelector(cfg.submitButtonSelector);
  inputs.forEach((i) => hideError(i, cfg));
  btn.disabled = true;
  btn.classList.add(cfg.inactiveButtonClass);
};
