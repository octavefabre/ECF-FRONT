const form = document.querySelector("#myForm");
const lastNameInput = document.querySelector("#lastName");
const firstNameInput = document.querySelector("#firstName");
const emailInput = document.querySelector("#email");
const objetInput = document.querySelector("#objet");
const messageInput = document.querySelector("#message");
const agreedSelect = document.querySelector("#agreed");
const submitBtn = document.querySelector("#submitBtn");

let lastNameImputOK = false;
let firstNameInputOK = false;
let emailInputOK = false;
let objetImputOK = false;
let messageImputOk = false;
function disableButton() {
  if (
    firstNameInputOK &&
    lastNameInput &&
    emailInputOK &&
    objetImputOK &&
    messageImputOk &&
    agreedSelect.checked
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
firstNameInput.addEventListener("input", function () {
  if (firstNameInput.value === "") {
    const erreurFirstName = document.createElement("p");
    erreurFirstName.textContent = "Vous devez saisir un prénom.";
    erreurFirstName.id = "erreurFirstName";
    if (form.contains(document.querySelector("#erreurFirstName"))) {
      document.querySelector("#erreurFirstName").remove();
    }
    form.appendChild(erreurFirstName);
    firstNameInputOK = false;
  } else {
    if (form.contains(document.querySelector("#erreurFirstName"))) {
      document.querySelector("#erreurFirstName").remove();
    }

    firstNameInputOK = true;
  }
  disableButton();
});

lastNameInput.addEventListener("input", function () {
  if (lastNameInput.value === "") {
    const erreurLastName = document.createElement("p");
    erreurLastName.textContent = "Vous devez saisir un nom.";
    erreurLastName.id = "erreurLastName";
    if (form.contains(document.querySelector("#erreurLastName"))) {
      document.querySelector("#erreurLastName").remove();
    }
    form.appendChild(erreurLastName);
    lastNameImputOK = false;
  } else {
    if (form.contains(document.querySelector("#erreurLastName"))) {
      document.querySelector("#erreurLastName").remove();
    }

    lastNameImputOK = true;
  }
  disableButton();
}
);
emailInput.addEventListener("input", function () {
  if (emailInput.value === "") {
    const erreurEmail = document.createElement("p");
    erreurEmail.textContent = "Vous devez saisir une adresse email.";
    erreurEmail.id = "erreurEmail";
    if (form.contains(document.querySelector("#erreurEmail"))) {
      document.querySelector("#erreurEmail").remove();
    }
    form.appendChild(erreurEmail);
    emailInputOK = false;
  } else {
    if (form.contains(document.querySelector("#erreurEmail"))) {
      document.querySelector("#erreurEmail").remove();
    }

    emailInputOK = true;
  }
  disableButton();
}
);
objetInput.addEventListener("input", function () {
  if (objetInput.value === "") {
    const erreurObjet = document.createElement("p");
    erreurObjet.textContent = "Vous devez saisir un objet.";
    erreurObjet.id = "erreurObjet";
    if (form.contains(document.querySelector("#erreurObjet"))) {
      document.querySelector("#erreurObjet").remove();
    }
    form.appendChild(erreurObjet);
    objetImputOK = false;
  } else {
    if (form.contains(document.querySelector("#erreurObjet"))) {
      document.querySelector("#erreurObjet").remove();
    }

    objetImputOK = true;
  }
  disableButton();
}
);
messageInput.addEventListener("input", function () {
  if (messageInput.value === "") {
    const erreurMessage = document.createElement("p");
    erreurMessage.textContent = "Vous devez saisir un message.";
    erreurMessage.id = "erreurMessage";
    if (form.contains(document.querySelector("#erreurMessage"))) {
      document.querySelector("#erreurMessage").remove();
    }
    form.appendChild(erreurMessage);
    messageImputOk = false;
  } else {
    if (form.contains(document.querySelector("#erreurMessage"))) {
      document.querySelector("#erreurMessage").remove();
    }

    messageImputOk = true;
  }
  disableButton();
}
);
agreedSelect.addEventListener("change", function () {
  if (!agreedSelect.checked) {
    const erreurAgreed = document.createElement("p");
    erreurAgreed.textContent = "Vous devez accepter les conditions d'utilisation.";
    erreurAgreed.id = "erreurAgreed";
    if (form.contains(document.querySelector("#erreurAgreed"))) {
      document.querySelector("#erreurAgreed").remove();
    }
    form.appendChild(erreurAgreed);
  } else {
    if (form.contains(document.querySelector("#erreurAgreed"))) {
      document.querySelector("#erreurAgreed").remove();
    }
    disableButton();
  }
}
);



