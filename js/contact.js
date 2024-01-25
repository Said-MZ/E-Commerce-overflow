import faq from "./faqData.js";

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
  alert.style.top = "0%";

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
    alert.style.top = "-100%";
  }, 3000);
}

// FAQ
const FAQContainer = document.querySelector(".FAQ .container");

faq.map(({ title, info }, i) => {
  return (FAQContainer.innerHTML += `
      <div class="FAQ-content">
        <div class="FAQ-item">
          <div class="question-container">
            <h4>${i + 1}.  ${title}</h4>
            <div class="plus-icon">
              <div class="line1"></div>
              <div class="line3"></div>
            </div>
          </div>
          <p class="FAQ-item-info">${info}</p>
        </div>
      </div>
    `);
});

const FAQItem = document.querySelectorAll(".FAQ-item");

FAQItem.forEach((item) => {
  const handleClick = (plusIcon, FAQItemInfo) => {
    if (plusIcon === undefined || FAQItemInfo === undefined) {
      return;
    }
    plusIcon.classList.toggle("rotate");
    FAQItemInfo.classList.toggle("show");
  };

  item.addEventListener("click", (e) => {
    const target = e.currentTarget;
    const questionContainer = target.querySelector(".question-container");
    const plusIcon = target.querySelector(".plus-icon");
    const FAQItemInfo = target.querySelector(".FAQ-item-info");
    handleClick(plusIcon, FAQItemInfo);
    questionContainer.addEventListener("click", handleClick);
  });
});
