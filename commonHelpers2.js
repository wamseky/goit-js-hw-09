import"./assets/styles-66cf45ec.js";const l=document.querySelector(".feedback-form");l.addEventListener("submit",m);const o="feedback-form-state";function m(e){e.preventDefault();const t=e.target,a=t.elements.email.value.trim(),s=t.elements.message.value.trim();if(a===""||s===""){alert("All form fields must be filled in");return}console.log({email:a,message:s}),t.reset(),localStorage.removeItem(o)}l.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value,a=e.currentTarget.elements.message.value,s={email:t,message:a};localStorage.setItem(o,JSON.stringify(s))});function n(){const e=JSON.parse(localStorage.getItem(o));if(console.log(e),e){const{email:t,message:a}=l.elements;a.value=e.message,t.value=e.email}}n();
//# sourceMappingURL=commonHelpers2.js.map