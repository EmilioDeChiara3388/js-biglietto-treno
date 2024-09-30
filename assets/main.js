/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// Creazione variabili e Raccolta Dati
let km = Number(prompt("Inserisci chilometri da percorrere"));
let age = Number(prompt("Inserisci età del passeggero"));
let price = km * 0.21;
let discount = 0;
let finalPrice = price - discount;

console.log(km);
console.log(price);
console.log(age);

//Elaborazione Codice
if (age < 18){
    discount = price - (price / 100 * 80);
    finalPrice = price - discount;
} else if (age >= 65){
    discount = price - (price / 100 * 60);
    finalPrice = price - discount;
}
console.log("Il prezzo finale del tuo biglietto è " + finalPrice.toFixed(2));
    alert("Il prezzo finale del tuo biglietto è " + finalPrice.toFixed(2));

