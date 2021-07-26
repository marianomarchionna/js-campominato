// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
var bombe = [];
const numeroBombe = 16;
const cento = 100;
var i = 0;

while (bombe.length < numeroBombe) {
    let bomba = randomNumber(1, cento);
    let ricerca = isInArray(bombe, bomba);
    if (ricerca == false) 
        bombe.push(bomba);
    i++;
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
var numeriUtente = [];
var ricercaNumeri = false;


while (numeriUtente.length < (cento - numeroBombe)) {
    do {  
        var userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
    } while ((userNumber < 1) || (userNumber > cento) || (isNaN(userNumber)));

    ricercaNumeri = isInArray(numeriUtente, userNumber);
    numeriUtente.push(userNumber);
}

// Funzioni
function randomNumber(min, max) {
    return risultato = Math.floor(Math.random() * max - min + 1) + min; 
}

function isInArray(array, element) {
    var result = false;
    var i = 0;
    while (i < array.length && result == false) {

        if (element == array[i])
            result = true;

        i++;
    }
    return result;
}