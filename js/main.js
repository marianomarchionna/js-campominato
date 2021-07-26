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
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var numeriUtente = [];
var ricercaNumeri = false;
var ricercaBomba = false;

while (numeriUtente.length < (cento - numeroBombe) && ricercaBomba == false) {
    do {  
        var numero = parseInt(prompt('Inserisci un numero da 1 a 100'));
    } while (numero < 1 || numero > cento || isNaN(numero));

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

if (numeriUtente.length == cento - numeroBombe){
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