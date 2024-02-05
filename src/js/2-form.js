const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let dataUser = {};
const localStorageKey = 'feedback-form-state';
let parseSavedData = JSON.parse(localStorage.getItem(localStorageKey));

form.addEventListener('input', setLocale);
form.addEventListener('submit', submit);

function setLocale() {
  dataUser.email = form.elements.email.value;
  dataUser.message = form.elements.message.value;

  localStorage.setItem(localStorageKey, JSON.stringify(dataUser));
}
if (parseSavedData.email) {
  email.value = parseSavedData.email;
}

if (parseSavedData.message) {
  message.value = parseSavedData.message;
}

function submit(event) {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
}
