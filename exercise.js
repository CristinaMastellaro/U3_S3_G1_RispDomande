// 1) Quali sono i tipi primitivi principali in TypeScript?
// Gli stessi di JS (stringhe, numeri, booleani, null, undefined) con qualcuno in più (ad es any e never)
// ----------------------------------------------------------------
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var nome = "Cristina";
var age = 25;
var studyingTS = true;
// ----------------------------------------------------------------
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
// ---------------------------------------------------------------
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
// ----------------------------------------------------------------
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var priceWithIVA = function (price) {
    return price + (22 / 100) * price;
};
var price = 22;
// console.log(priceWithIVA(price));
// ----------------------------------------------------------------
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var totalLength = function (str1, str2) {
    return str1.length + str2.length;
};
// console.log(totalLength("Gino", "Pino"));
// ----------------------------------------------------------------
// 7) Cos'è un Type Union e come si scrive?
// Una type union consiste nel dare a un dato più di un tipo. Si scrive unendo i diversi tipi con l'operatore |. Es: const myFavoriteNumber: boolean | number = false
// ---------------------------------------------------------------
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var myVar = 24;
// ---------------------------------------------------------------
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// ---------------------------------------------------------------
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var myTuple = [
    "Gino",
    "Pino",
    "Lino",
    23,
    24,
];
var totalStudents = [
    { name: "Gino", score: 24 },
    { name: "Pippo", score: 5 },
    { name: "Lino", score: 29 },
    { name: "Pluto", score: 30 },
];
//  ---------------------------------------------------------------
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myCar = {
    plate: "ER121LO",
    numberWheels: 4,
    acceptableNumberOfPeople: 4,
};
