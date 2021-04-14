//creo una variabile dove vado a chiedere una parola all'utente

var parola= prompt('Inserisci una parola per vedere se è palindroma');

//adesso vado a creare una funzione dove all'interno ci saranno due variabili.

//console.log(controlloPalindromo(parola));

document.getElementById("risultato").innerHTML=controlloPalindromo(parola);

function controlloPalindromo (str) {

   //  la variabile "palindomo" equivale alla parola inserita dall'utente,spezzattata e inserita in un array grazie a split (dando l'struzione '' dentro le parentesi di split vado a dirgli che deve spezzettare ogni singolo carattere della parola),poi tramite l'istruzione reverse vado a invertire l'ordine dell'array ed infine con join trasforma di nuovo l'array in una stringa (anche qui dando l'istruzione '' dentro le parentesi di join vado a dire di non mettere spazi tra gli elementi)

  var palindromo=str.split('').reverse().join('');

    //creo la variabile msg per inserire un risultato dell'esito,dove se sarà palindromo comparirà un messaggio, mentre se non lo è ce ne sarà un altro

  var msg;

    //creo la condizione per verificare se la parola è palindroma o meno
  
  if(str == palindromo){

    msg="La parola " + str + " è palindroma";

  }else{

    msg="La parola " + str + " non è palindroma";

  }
  //usando return msg vado a tirare fuori dalla funzione il risultato,cosi quando andrò a chiamare la funzione restituirà il roisultato creato,altrimenti comparirà "undefined"

   return msg;
}
