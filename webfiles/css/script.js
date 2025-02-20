const form = document.querySelector("#myForm");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const passwordInput = document.querySelector("#password");
const paysSelect = document.querySelector("#pays");
const legalSelect = document.querySelector("#legal");
const submitBtn = document.querySelector("#submitBtn");
let nameImputOK = false;
let ageInputOK = false;
let passwordInputOK = false;
let paysImputOK = false;
let legalImputOk = false;
function disableButton() {
  console.log(paysImputOK);
  if (
    nameImputOK &&
    ageInputOK &&
    passwordInputOK &&
    paysImputOK
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
nameInput.addEventListener("input", function () {
  if (nameInput.value === "") {
    console.log("Le champ nom ne peut pas être vide.");
    nameImputOK = false;
  } else {
    nameImputOK = true;
  }
  disableButton();
});
ageInput.addEventListener("input", function () {
  if (ageInput.value < 18) {
    // Dans un premier temps, on crée un élément HTML (ici un paragraphe)
    const erreurAge = document.createElement("p");

    // Dans un second temps on lui ajoute du contenu textuel
    erreurAge.textContent = "Vous devez avoir au moins 18 ans.";

    // On spécifie un ID pour cet élément
    erreurAge.id = "erreurAge";

    // En amont de toute étape : on supprime l'ancien élément si il existe dans le formulaire
    if(form.contains(document.querySelector("#erreurAge"))){
      document.querySelector("#erreurAge").remove();
    }

    // Quoi qu'il arrive, on injecte l'élément dans le formulaire
    form.appendChild(erreurAge);

    // Pour vous débugger dans la console au cas ou...
    console.log("Vous devez avoir au moins 18 ans.");
    ageInputOK = false;

    // Le cas contraire: c'est que l'utilisateur a saisi 18 ans ou plus
  } else {

    // Si la notification de l'age (sous forme de paragraphe) existait dans le formulaire, on le supprime
    if(form.contains(document.querySelector("#erreurAge"))){
      document.querySelector("#erreurAge").remove();
    }

    ageInputOK = true;
  }
  disableButton();
});
passwordInput.addEventListener("input", function () {
  if (passwordInput.value.length < 8) {
    console.log("Le mot de passe doit contenir au moins 8 caractères.");
    passwordInputOK = false;
  } else {
    passwordInputOK = true;
    disableButton();
  }
});
paysSelect.addEventListener("change", function () {
  if (paysSelect.value === "") {
    console.log("Veuillez sélectionner une option.");
    paysImputOK = false;
  } else {
    paysImputOK = true;
  }
  disableButton();
});
form.addEventListener("submit", function () {
  alert("Vous avez sélectionné : " + paysSelect.value);
});