import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),o=document.querySelector('textarea[name="message"]');let a={};const m="feedback-form-state";let t=JSON.parse(localStorage.getItem(m));e.addEventListener("input",r);e.addEventListener("submit",n);function r(){a.email=e.elements.email.value,a.message=e.elements.message.value,localStorage.setItem(m,JSON.stringify(a))}t.email&&(l.value=t.email);t.message&&(o.value=t.message);function n(s){s.preventDefault(),localStorage.removeItem(m),e.reset()}
//# sourceMappingURL=commonHelpers2.js.map
