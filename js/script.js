//Impostazione Array

var list = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var finalList = document.getElementById("finalList");

var output = "";

//Richiesta Input

do{
    var input = prompt("Inserisci il tuo cognome");
}while(!isNaN(input));

//Modifica Array

list.push(input);

list.sort();

console.log(list);