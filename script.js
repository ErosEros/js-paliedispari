/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

// chiedo all utente di inserire una parola
// const parola = prompt ('Inserisci una parola');
// console.log(parola);
// let containerText = document.getElementById('container-text');
// containerText.innerHTML = parola;

// let parolaPalindroma = palindromaFunction(parola);
// console.log('è palindroma:', parolaPalindroma)
// // creo una funziona per stabilire se la parola è palindroma oppure no 
// function palindromaFunction(text){
//     console.log(text.charAt(0));

//     let textReverse = '';
//     // avvio un ciclo per reversare i caratteri di text
//     for(let i = 0; i < text.length; i++) {
//         const carattere = text.charAt(i);

//         textReverse = carattere + textReverse;

//     }
//     console.log('testo invertito:',textReverse)
//     const isEqual = textReverse === text;
//     return isEqual;

// }


// pari e dispari

// chiedo all'utente di scegliere se sono pari o dispari
let sceltaUtente = '';

while(sceltaUtente !== 'pari' && sceltaUtente !== 'dispari'){
     sceltaUtente = prompt ('Scegli se pari o dispari');
     if (sceltaUtente !== undefined) {
        sceltaUtente = sceltaUtente.toLowerCase();
     }
    
}


// chiedo all'utente un numero da 1 a 5 
let numero = 0;

while(isNaN(numero) || numero < 1 || numero > 5){
    numero = parseInt(prompt('Scegli un numero da 1 a 5'));
  
}



// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  const numeroPc = numeroRandom(1, 5);

//   sommiamo i due numeri 
const sum = numero + numeroPc;

// verifichiamo se la somma è pari o dispari
const pariODispari = isOddOrEven(sum) ? 'pari' : 'dispari';

//  dichiaro chi ha vinto
if (sceltaUtente === pariODispari) {
    console.log(sceltaUtente, sum,'hai vinto')
}else {
    console.log(sceltaUtente, sum,'hai perso')
}


  function numeroRandom(min,max) {
    const range = max - min + 1
    const random = Math.floor(Math.random()* range) + min;
    return random
  }

  function isOddOrEven(numberToCheck) {
    return ( numberToCheck % 2 === 0)
  }