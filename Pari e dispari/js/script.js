//chiedo all'utente tramite due prompt di scegliere "pari o dispari" e di inserire un numero da 1 a 5

var scelta_utente= prompt('Scegli tra pari o dispari');
//console.log(scelta_utente);

var num_utente= parseInt(prompt('inserisci un numero da 1 a 5'));
//console.log(num_utente);

//creo una variabile che andrà a richiamare la funzione e dopo averla chiamata salverà il dato

var num_cpu=numero_rdm(5);

//console.log(num_cpu);

//creo la funzione e assegno la variabile "n" dentro le parentesi, "n" è la variabile astratta che prende il valore da fuori(in questo caso 5) e all'interno creo un'ulteriore variabile dove vado a creare un numero random e a fine funzione richiamare il risultato con return

function numero_rdm(n){

  var rdm=Math.floor(Math.random() * n) +1;
  return rdm;

}

//creo una variabile somma dove andrà a sommare i numeri presi dall'utente e dalla funzione

var somma= num_utente + num_cpu;
//console.log(somma)

/* function somma(n1,n2){
  var somma= n1 + n2;
  return somma;
} */

//creo una funzione e una variabile "risultato" che andrà a richiamarla,nella quale all'interno controllerò se la varibile "somma" è pari o dispari 

var risultato= controllo_pari(somma);
//console.log(risultato);

function controllo_pari(n){

  var str;

  if(n%2){

    str="dispari";

  }else{

    str="pari";

  }

  return str;
}

//creo una variabile "msg" che all'interno conterrà il risultato dell'operazione stampato a video

var msg="l'utente ha scelto: " + scelta_utente + "<br> Il numero dell'utente è: " + num_utente + "<br> Il numero del computer è :" + num_cpu + "<br> la somma è: " + somma + " ed è " + risultato;

//creo un condizione dove vado a verificare se la scelta dell'utente e il risultato finale coincidono,in tal caso l'utente avrà vinto e in caso contrario perso

if(scelta_utente===risultato){

  msg+="<br> Complimenti hai vinto!";

}else{

  msg+="<br> Mi spiace hai perso!";

}

//faccio comparire a video l'intera operazione

document.getElementById('risultato').innerHTML=msg;