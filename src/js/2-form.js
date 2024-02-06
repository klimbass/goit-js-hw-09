const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let formData = {};
const localStorageKey = 'feedback-form-state';
const parseSavedData = JSON.parse(localStorage.getItem(localStorageKey));

form.addEventListener('input', saveFormData);
form.addEventListener('submit', submit);

function saveFormData() {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}
if (parseSavedData && parseSavedData.email) {
  email.value = parseSavedData.email;
}

if (parseSavedData && parseSavedData.message) {
  message.value = parseSavedData.message;
}

function submit(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please, fill in all fields!');
  }
}
