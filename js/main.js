// BONUS
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


do{
    var difficolta = parseInt(prompt('Scegli il livello di difficoltà: 0 = facile, 1 = intermedio, 2 = difficile'));
}while (difficolta > 2 || isNaN(difficolta));

switch(difficolta){
    case 0:
        var range = 100;
        break;
    case 1:
        var range = 80;
        break;
    case 2:
        var range = 50;
        break;
}
 
// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
var bombe = [];
const numeroBombe = 16;
var i = 0;

while (bombe.length < numeroBombe) {
    let bomba = randomNumber(1, range);
    let ricerca = isInArray(bombe, bomba);
    if (ricerca == false) 
        bombe.push(bomba);
    i++;
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var numeriUtente = [];
var ricercaNumeri = false;
var ricercaBomba = false;

while (numeriUtente.length < (range - numeroBombe) && ricercaBomba == false) {
    do {  
        var numero = parseInt(prompt('Inserisci un numero da 1 a 100'));
    } while (numero < 1 || numero > range || isNaN(numero));

    ricercaNumeri = isInArray(numeriUtente, numero);
    ricercaBomba = isInArray(bombe, numero);

    if (ricercaNumeri == true){
        alert('Inserisci un altro numero, questo è già stato inserito!');
    } else if (ricercaBomba == false){
        numeriUtente.push(numero);
    } else {
        alert('BOOOM! Hai colpito una mina, mi dispiace, hai perso!');
    }
    i++;
}

if (numeriUtente.length == range - numeroBombe){
    alert('Complimenti, hai vinto!');
}
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log('Il tuo punteggio è: ' + numeriUtente.length);

//posizione bombe
console.log('Le bombe erano nelle posizioni: ');
for(i = 0; i < bombe.length; i++ ){
    console.log(bombe[i]);
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