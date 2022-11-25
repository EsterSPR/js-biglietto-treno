let chilometri = prompt('Inserisci il numero di chilometri da percorrere');
let prezzoNormale = chilometri * 0.21;
let anni = prompt('Inserisci la tua età');

if (anni < '18') {
    let prezzoUnder = prezzoNormale / 100 * 20;
    let prezzoUnderRound = prezzoUnder.toFixed(2);
    console.log(prezzoUnderRound);
} else if (anni > '65') {
    let prezzoOver = prezzoNormale / 100 * 40;
    let prezzoOverRound = prezzoOver.toFixed(2);
    console.log(prezzoOverRound);
} else {
    let prezzoNormaleRound = prezzoNormale.toFixed(2);
    console.log(prezzoNormaleRound);
}
