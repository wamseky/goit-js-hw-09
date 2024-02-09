import"./assets/styles-c7f59cca.js";const l=document.querySelector(".feedback-form");l.addEventListener("submit",m);function m(t){t.preventDefault();const e=t.target,o=e.elements.email.value.trim(),r=e.elements.password.value.trim();if(o===""||r===""){alert("All form fields must be filled in");return}console.log({email:o,password:r}),e.reset()}
//# sourceMappingURL=commonHelpers2.js.map
