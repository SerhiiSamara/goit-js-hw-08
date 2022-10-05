const localStorageObj = {};
const formEl = document.querySelector('.feedback-form');
const parsedSettings =
  JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
const throttle = require('lodash.throttle');

formEl.addEventListener('input', throttle(onFormInput, 500));

formEl.addEventListener('submit', onFormSubmit);

formEl.elements.email.value = parsedSettings.email ?? '';
formEl.elements.message.value = parsedSettings.message ?? '';

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')) ?? {});
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.email.value = '';
  e.currentTarget.message.value = '';
}

function onFormInput(e) {
  localStorageObj[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(localStorageObj));
}
