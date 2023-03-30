const button = document.querySelector("button");
const success = document.querySelector(".success");
const form = document.querySelector("form");

function successMsg() {
  success.classList.remove("hide");
  setTimeout(() => {
    success.classList.add("hide");
  }, 5000);
}

let isValid = false;

function checkForm(e) {
  e.preventDefault();
  isValid = form.checkValidity();

  if (isValid) {
    successMsg();
    console.log(form.email.value);
  }
}

button.addEventListener("click", checkForm);
