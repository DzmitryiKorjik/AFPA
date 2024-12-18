"use strict"

let userFirstName;
let userLastName;
let ageSaisir;
let genreSaisir;
let btn = document.getElementById('button');
let message = document.getElementById('message');

function verifierimposition(e) {

    e.preventDefault();
    userFirstName = document.getElementById('userFirstName').value;
    userLastName = document.getElementById('userLastName').value;
    ageSaisir = document.getElementById('age-saisi').value;
    genreSaisir = document.getElementById('genre-saisir').value;

    if (genreSaisir == "H" && ageSaisir > 20) {
        message.textContent =   `${userFirstName} ${userLastName }. Vous êtes imposable.`;
    } else if (genreSaisir == "F" && ageSaisir >= 18 && ageSaisir <= 35) {
        message.textContent = `${userFirstName} ${userLastName}. Vous êtes imposable.`;
    } else {
        message.textContent = `${userFirstName} ${userLastName}. Vous ne pouvez pas être imposable.`;
    }
}

btn.addEventListener('click', verifierimposition, false);


let numberPhoto;
let btnPhoto = document.getElementById('btn-photo');
let messagePhoto = document.getElementById('message-photo');
let cost = 0;

function costPhotocopy(e) {
    e.preventDefault();
    numberPhoto = document.getElementById('number-photo').value;

    if (numberPhoto <= 10) {
        cost = numberPhoto * 0.10;
    } else if (numberPhoto <= 30) {
       cost = (10 * 0.10) + ((numberPhoto - 10) * 0.09);
    } else {
        cost = (10 * 0.10) + (20 * 0.10) + ((numberPhoto - 30) * 0.08);
    }
    messagePhoto.textContent = `Le prix de la photocopie pour ${numberPhoto} photos est de ${cost.toFixed(2)} euros.`;
}

btnPhoto.addEventListener('click', costPhotocopy, false);

let userHeure;
let userMinute;
let userSeconde;

let btnHeure = document.getElementById('btn-heure');
let messageHeure = document.getElementById('message-heure');

function heure(e) {
    e.preventDefault();

    userHeure = parseInt(document.getElementById('heure').value);
    userMinute = parseInt(document.getElementById('minutes').value);
    userSeconde = parseInt(document.getElementById('secondes').value);

    if (userHeure > 23 || userMinute > 59 || userSeconde > 59) {
        messageHeure.innerHTML = "Veuillez entrer une heure valide (heures: 0-23, minutes et secondes: 0-59).";
        return;
    }
    userSeconde += 1;
        if (userSeconde == 60) {
            userSeconde = 0; 
            userMinute += 1; 
        }


        if (userMinute == 60) {
            userMinute = 0; 
            userHeure += 1;
        }


        if (userHeure == 24) {
            userHeure = 0; 
        }
    
    userHeure = userHeure.toString().padStart(2, "0");
    userMinute = userMinute.toString().padStart(2, "0");
    userSeconde = userSeconde.toString().padStart(2, "0");
    
    messageHeure.textContent = `Il est ${userHeure}h ${userMinute}min ${userSeconde}sec.`;
}

btnHeure.addEventListener('click', heure, false);


let argentTotal;
let argentDonne;

let aRendre;
let nombre10;
let nombre5;
let nombre1;
 
let monnai10 = document.getElementById('monnai10');
let monnai5 = document.getElementById('monnai5');
let monnai1 = document.getElementById('monnai1');

monnai10.textContent = '0';
monnai5.textContent = '0';
monnai1.textContent = '0';

let btnPayer = document.getElementById('btn-payer');
let massageMonnai = document.getElementById('message-payer');

function payer(e) {
    e.preventDefault();

    argentTotal = parseInt(document.getElementById('total').value);
    argentDonne = parseInt(document.getElementById('donne').value);
    console.log("argentTotal :", argentTotal);
    console.log("argentTotal :", argentDonne);
    console.log("Type :", typeof(argentTotal));
    console.log("Type :", typeof(argentDonne));

    if (isNaN(argentTotal) || isNaN(argentDonne)) {
        massageMonnai.textContent = "Veuillez entrer des valeurs valides.";
        return;
    }

    if (argentDonne < argentTotal) {
        massageMonnai.textContent = "L'argent donné est insuffisant.";
        return;
    }

    aRendre = argentDonne - argentTotal;
    console.log("aRendre", aRendre);

    nombre10 = 0;
    while(aRendre >= 10) {
        aRendre -= 10;
        nombre10 += 1;
    }

    nombre5 = 0;
    while(aRendre >= 5) {
        aRendre -= 5;
        nombre5 += 1;
    }
    
    nombre1 = 0;
    while(aRendre >= 1) {
        aRendre -= 1;
        nombre1 += 1;
    }

    monnai10.textContent = nombre10;
    monnai5.textContent = nombre5;
    monnai1.textContent = nombre1;
    console.log(nombre10);
    console.log(nombre5);
    console.log(nombre1);

    massageMonnai.textContent = `La monnaie à rendre : ${nombre10} billets de 10€, ${nombre5} billets de 5€, ${nombre1} pièces de 1€.`
}

btnPayer.addEventListener('click', payer, false);


let userEmail;

let btnEmail = document.getElementById('btn-email');
let messageEmail = document.getElementById('message-email');

function email(e) {
    e.preventDefault();

    userEmail = document.getElementById('email').value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
        messageEmail.textContent = "Veuillez entrer une adresse email valide.";
        return;
    }

    messageEmail.textContent = `L'adresse email ${userEmail} est valide.`;
}

btnEmail.addEventListener('click', email, false);



let messageTarif = document.getElementById('messageTarif');
let btnTarif = document.getElementById('btnTarif');
let compteurPrime;

function tarif(e) {
    e.preventDefault();

    let accident = parseInt(document.getElementById('accident').value);

    if (accident > 3) {
        messageTarif.innerHTML = '<div class="alert alert-danger" role="alert">Refusé</div>';
    } else {
        compteurPrime = 0;
        let ageConducteur = parseInt(document.getElementById('ageConductor').value);
        let permis = parseInt(document.getElementById('anneePermis').value);
        let fidelite = parseInt(document.getElementById('fidelite').value);

        if (isNaN(accident) || isNaN(ageConducteur) || isNaN(permis) || isNaN(fidelite)) {
            messageTarif.innerHTML = '<div class="alert alert-danger" role="alert">Veuillez entrer des valeurs numériques.</div>';
            return;
        }

        if (ageConducteur > 25) {
            compteurPrime += 1;
        }
        if (permis > 2) {
            compteurPrime += 1;
        }
        if (fidelite > 1) {
            compteurPrime += 1;
        }
        compteurPrime -= accident
        console.log(compteurPrime);

        switch(compteurPrime) {
            case 3: messageTarif.innerHTML = '<div class="alert alert-primary" role="alert">Bleu</div>';
            break;
            case 2: messageTarif.innerHTML = '<div class="alert alert-success" role="alert">Vert</div>';
            break;
            case 1: messageTarif.innerHTML = '<div class="alert alert-warning" role="alert">Orange</div>';
            break;
            case 0: messageTarif.innerHTML = '<div class="alert alert-danger" role="alert">Rouge</div>';
            break;
            case -1: messageTarif.innerHTML = '<div class="alert alert-danger" role="alert">Refusé</div>';
            break;
            default: messageTarif.innerHTML = '<div class="alert alert-secondary" role="alert">Erreur inconnue</div>';
        }
    }

}

btnTarif.addEventListener('click', tarif, false);

let comteurPasse;
let messagePasse = document.getElementById('message-passe');
let btnPasse = document.getElementById('btn-passe');

function passe(e) {
    e.preventDefault();

    let userPasse = document.getElementById('motDePasse').value;
    comteurPasse = 0;
    let lettres = /[a-z]/;
    let chiffres = /[0-9]/;
    let caracteresSpeciaux = /[!@#$%^&*(),.?":{}|<>]/;
    let caracteresSpeciauxchiffres = /.*[A-Za-z].*[^A-Za-z0-9\s].*/;

    console.log('userPasse :', userPasse);

    if (lettres.test(userPasse)) {
        comteurPasse += 1;
    }
    if (chiffres.test(userPasse)) {
        comteurPasse += 1;
    }
    if (caracteresSpeciaux.test(userPasse)) {
        comteurPasse += 1;
    }
    if (caracteresSpeciauxchiffres.test(userPasse)) {
        comteurPasse += 1;
    }
    if (userPasse.length < 8) {
        comteurPasse -= 1;
    }
    console.log("comteurPasse :", comteurPasse);

    switch(comteurPasse) {
        case 4: messagePasse.textContent = "Mot de passe très sécurisé";
        break;
        case 3: messagePasse.textContent = "Mot de passe sécurisé";
        break;
        case 2: messagePasse.textContent = "Mot de passe moyen";
        break;
        case 1: messagePasse.textContent = "Mot de passe dangereux";
        default: messagePasse.textContent = "Mot de passe non valide";
    }
}

btnPasse.addEventListener('click', passe, false);