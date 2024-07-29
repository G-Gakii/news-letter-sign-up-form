let form = document.getElementById("form");
let mycontainer = document.querySelector(".container");
let emailInput = document.getElementById("email");
let email = emailInput.value;
let errorMessage = document.getElementById("error-message");

let container = document.createElement("div");
let image = document.createElement("img");
image.src = "assets/images/icon-success.svg";
image.alt = "success-icon";
let header = document.createElement("h2");
header.innerHTML = "Thanks for subscribing!";
let para = document.createElement("p");

let button = document.createElement("button");
button.innerHTML = "Dismiss message";

container.append(image, header, para, button);
container.classList.add("response");
container.style.display = "none";
document.body.append(container);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailInput = document.getElementById("email");
  let email = emailInput.value;
  if (!validateEmail(email)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    para.innerHTML = `A confirmation email has been sent to <b> ${email} </b>. Please open it and click the button inside to confirm your subscription`;
    container.style.display = "block";
    mycontainer.style.display = "none";
  }
});

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
