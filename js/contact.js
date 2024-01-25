// import faq from "./faqData";

// handle form

const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("input[type=text]");
  const email = document.querySelector("input[type=email]");
  const message = document.querySelector("textarea");
  const nameValue = name.value;
  const emailValue = email.value;
  const messageValue = message.value;

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    displayAlert(" Error", "Please fill out all fields", "danger");
  } else {
    displayAlert("Success", "Message sent successfully", "success");
    name.value = "";
    email.value = "";
    message.value = "";
    console.log(`
    Name: ${nameValue}
    Email: ${emailValue}
    Message: ${messageValue}
    `);
  }
});

// display alert

function displayAlert(header, text, action) {
  const alert = document.querySelector(".alert");
  const alertH4 = document.querySelector(" .alert h4");
  const alertP = document.querySelector(".alert p");
  const timeLine = document.querySelector(".alert .time-line");

  alert.style.display = "block";
  alert.style.width = "clamp(350px, 50%, 450px)";
  alert.style.opacity = "1";

  alert.classList.add(`alert-${action}`);
  alertH4.innerHTML = header;
  alertP.innerHTML = text;
  timeLine.style.opacity = "1";
  timeLine.classList.add(`time-line-animate`);

  setTimeout(() => {
    alert.style.opacity = "0";
    alert.style.width = "0";
    alert.classList.remove(`alert-${action}`);
    timeLine.classList.remove(`time-line-animate`);
    timeLine.style.opacity = "0";
  }, 3000);
}
