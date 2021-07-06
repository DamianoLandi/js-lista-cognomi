//Impostazione Array

var list = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var finalList = document.getElementById("finalList");

var output = "";

//Richiesta Input

do{
    var input = prompt("Inserisci il tuo cognome");
}while(!isNaN(input));

console.log(finalInput);

//Modifica Array

list.push(input);

list.sort();

console.log(list);

//Logica

for(i = 0; i < list.length; i++){
    output += "<li>" + list[i] + " - Posizione: " + (i + 1) + "</li>";
}

//Print in HTML

console.table(list);

console.log(output);

finalList.innerHTML = output;