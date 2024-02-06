const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let dataUser = {};
const localStorageKey = 'feedback-form-state';
const parseSavedData = JSON.parse(localStorage.getItem(localStorageKey));

form.addEventListener('input', setLocale);
form.addEventListener('submit', submit);

function setLocale() {
  dataUser.email = form.elements.email.value.trim();
  dataUser.message = form.elements.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(dataUser));
}
if (parseSavedData && parseSavedData.email) {
  email.value = parseSavedData.email;
}

if (parseSavedData && parseSavedData.message) {
  message.value = parseSavedData.message;
}

function submit(event) {
  event.preventDefault();
  if (dataUser.email && dataUser.message) {
    console.log(dataUser);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please, fill in all fields!');
  }
}
