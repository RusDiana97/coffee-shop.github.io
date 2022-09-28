// validate email
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const btnSubscribe = document.querySelector(".fa-envelope");
const subscribeInput = document.getElementById("subscribe-input");

// receive news about our coffee
function subscribeToNewsletter() {
  btnSubscribe.addEventListener("click", () => {
    // receives a message after pressing the btnSubscribe button
    const subscribeMessage = document.getElementById("subscribe-message");

    // return the address entered in the subscribeInput
    let emailSubscribe = subscribeInput.value;

    if (emailFormat.test(emailSubscribe)) {
      subscribeInput.classList.remove("is-invalid");
      subscribeMessage.innerHTML =
        "From now on you will receive news about our products by email.";
    } else {
      subscribeInput.classList.add("is-invalid");
      subscribeMessage.innerHTML = "Please enter a valid email adress.";
    }
  });
}

const btnContact = document.getElementById("send-message-btn-contact");
const contactInput = document.getElementById("email-input");
const contactTextarea = document.getElementById("textarea-form");

// contact us
function contactUs() {
  btnContact.addEventListener("click", () => {
    let emailValue = contactInput.value;
    let messageValue = contactTextarea.value;

    const contactMessage = document.getElementById("contact-message");

    if (emailFormat.test(emailValue) && messageValue) {
      contactInput.classList.remove("is-invalid");
      contactTextarea.classList.remove("is-invalid");
      contactMessage.innerHTML =
        "We will answer your message as soon as possible.";
    } else if (emailFormat.test(emailValue) === false && messageValue) {
      contactInput.classList.add("is-invalid");
      contactMessage.innerHTML = "Your email address is invalid.";
      contactTextarea.classList.remove("is-invalid");
    } else if (messageValue === "" && emailFormat.test(emailValue)) {
      contactInput.classList.remove("is-invalid");
      contactTextarea.classList.add("is-invalid");
      contactMessage.innerHTML =
        "Type something in the message before you send it to us.";
    } else {
      contactInput.classList.add("is-invalid");
      contactTextarea.classList.add("is-invalid");
      contactMessage.innerHTML =
        "Enter a valid email address and a message for us.";
    }
  });
}

subscribeToNewsletter();
contactUs();
