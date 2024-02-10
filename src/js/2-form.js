const form = document.querySelector(".feedback-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === "" || message === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = { email, message };
  console.log(formData);
  form.reset();
}

const localStorageKey = "feedback-form-state";

form.elements.email.value = localStorage.getItem(localStorageKey) ?? "";
form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", evt => {
  console.log('email:', evt.currentTarget.elements.email.value);
  console.log('message:', evt.currentTarget.elements.message.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});