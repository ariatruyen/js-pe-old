let errors = new Array();
console.log(errors);


function validatieForm() {
    checkEmptyField();
    validatieEmail();
    validatiePayment();
    validatieWachtwoord();
    checkPC()
}

function checkEmptyField(voornaam, naam, gebruikersnaam, adres, land, provincie) {

    if (voornaam.value = "") {
        errors.push("Het veld voornaam is vereist.")
    }
    if (naam.value = "") {
        errors.push("Het veld naam is vereist.")
    }
    if (gebruikersnaam.value = "") {
        errors.push("Het veld gebruikersnaam is vereist.")
    }
    if (adres.value = "") {
        errors.push("Het veld adres is vereist.")
    }
    if (land.value = "") {
        errors.push("Het veld land is vereist.")
    }
    if (provincie.value = "") {
        errors.push("Het veld provincie is vereist.0")
    }
}

function validatieEmail(emailadres) {
    //https://www.w3resource.com/javascript/form/email-validation.php
    let mail = "";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.value.match(mailformat)) {
        mail == true;
    } else {
        mail == false;
        errors.push("E-mailadres is niet correct.")
    }

}

function validatieWachtwoord(wachtwoord, herhaalWachtwoord) {
    let wachtwoorden = false;
    if (wachtwoord.value <= 7) {
        errors.push("Het wachtwoord moet langer zijn dan 7 karakters.")
    }
    if (wachtwoord.value = "") {
        errors.push("Het veld wachtwoord is vereist.")
    }
    if (herhaalWachtwoord.value = "") {
        errors.push("Het veld herhaal wachtwoord is vereist.")
    }
    if (herhaalWachtwoord.value != wachtwoord.value) {
        errors.push("Je wachtwoorden komen niet overeen.")
    } else {
        wachtwoorden = true;
    }
}

function validatiePayment(betaling) {
    //https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/
    //https://stackoverflow.com/questions/10756448/fill-div-with-text
    if (document.getElementById("app")) {
        document.getElementById(betaling).innerHTML = "Je betalingswijze is banking app."
    }
    if (document.getElementById("visa")) {
        document.getElementById(betaling).innerHTML = "Je betalingswijze is visa card."
    }
    if (document.getElementById("paypal")) {
        document.getElementById(betaling).innerHTML = "Je betalingswijze is Paypal."
    }
    if (document.getElementById("overschrijving")) {
        document.getElementById(betaling).innerHTML = "Je betalingswijze is Overschrijving."
    }
}

function checkPC(postcode) {
    let zipcode
    if (postcode.value = "") {
        errors.push("Het veld postcode is vereist.")
    }
    if (postcode.value < 1000 || postcode.value >= 10000) {
        errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.")
    } else {
        zipcode = true;
    }
}

function checkErrors() {
    console.log(errors);
    document.getElementById("error").innerHTML = errors;
}