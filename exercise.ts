// 1) Quali sono i tipi primitivi principali in TypeScript?

// Gli stessi di JS (stringhe, numeri, booleani, null, undefined) con qualcuno in più (ad es any e never)

// ----------------------------------------------------------------

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const nome: string = "Cristina";
const age: number = 25;
const studyingTS: boolean = true;

// ----------------------------------------------------------------

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }

const greet = (name: string) => {
  return "Ciao " + name;
};

// ---------------------------------------------------------------

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }

const sum = (a: number, b: number): number => {
  return a + b;
};

// ----------------------------------------------------------------

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const priceWithIVA = (price: number): number => {
  return price + (22 / 100) * price;
};
const price: number = 22;
// console.log(priceWithIVA(price));

// ----------------------------------------------------------------

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const totalLength = (str1: string, str2: string): number => {
  return str1.length + str2.length;
};
// console.log(totalLength("Gino", "Pino"));

// ----------------------------------------------------------------

// 7) Cos'è un Type Union e come si scrive?

// Una type union consiste nel dare a un dato più di un tipo. Si scrive unendo i diversi tipi con l'operatore |. Es: const myFavoriteNumber: boolean | number = false

// ---------------------------------------------------------------

// 8) Crea una variabile che possa contenere un numero, null o undefined.

const myVar: number | null | undefined = 24;

// ---------------------------------------------------------------

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

// Non ho capito la consegna

const weekDay: string[] = [
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato",
  "domenica",
];

// ---------------------------------------------------------------

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// ---------------------------------------------------------------

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const myTuple: [string, string, string, number, number] = [
  "Gino",
  "Pino",
  "Lino",
  23,
  24,
];

// ---------------------------------------------------------------

// 12) Qual è la differenza tra type e interface?

// La differenza è che interface è più versatile: accetta i generics come argomento e può essere estesa.

// ----------------------------------------------------------------

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface person {
  firstname: string;
  lastname: string;
  age: number;
}

//  ---------------------------------------------------------------

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface user extends person {
  email: string;
  phone?: number;
}

// ---------------------------------------------------------------

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface student {
  name: string;
  score: number;
}

const totalStudents: student[] = [
  { name: "Gino", score: 24 },
  { name: "Pippo", score: 5 },
  { name: "Lino", score: 29 },
  { name: "Pluto", score: 30 },
];

//  --------------------------------------------------------------

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface veicolo {
  plate: string;
  numberWheels: number;
}

interface auto extends veicolo {
  acceptableNumberOfPeople: number;
}

//  ---------------------------------------------------------------

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const myCar: auto = {
  plate: "ER121LO",
  numberWheels: 4,
  acceptableNumberOfPeople: 4,
};

//  ---------------------------------------------------------------

// 18) Cosa sono i Generics in TypeScript?

// I Generics sono degli argomenti che un'interfaccia accetta; serve per avere un tipo di dato flessibile...

// ----------------------------------------------------------------

// 19) È possibile avere più tipi generici in un'interfaccia?

// Sì? Nel senso che nel creare un'interfaccia, posso utilizzare al suo interno diversi tipi, anche quelli creati in precedenza da noi.

// ----------------------------------------------------------------

// 20) Crea un'interfaccia generica per una risposta API.

interface resAPI {
  id: number;
  title: string;
  description: string;
  price: number;
  borrowedBy: user;
}
