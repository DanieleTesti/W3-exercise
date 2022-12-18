/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una letiabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("\nEsercizio A\n");
let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("\nEsercizio B\n");

let random = Math.floor(Math.random() * 21);
// console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log("\nEsercizio C\n");

let me = [(name = "Daniele"), (cognome = "Testi"), (age = 20)];
// console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("\nEsercizio D\n");
me.pop();
// console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log("\nEsercizio E\n");

me.skills = ["js", "html", "css", "react"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("\nEsercizio F\n");
me.skills.push("ciao");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

// /* ESERCIZIO 1
//   Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
// */

console.log("\nEsercizio 1\n");

function dice() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}
dice();

// /* ESERCIZIO 2
//   Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
// */
console.log("\nEsercizio 2\n");

function whoIsBigger(n1, n2) {
  if (n1 > n2) console.log(n1, "maggiore di", n2);
  else if (n2 > n1) console.log(n2, "maggiore di", n1);
  else console.log("I numeri sono uguali");
}

// whoIsBigger(5, 5);

// /* ESERCIZIO 3
//   Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

//   Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
// */

console.log("\nEsercizio 3\n");

function splitMe(frase) {
  const diviso = frase.split(" ");
  console.log(diviso);
}
// splitMe("ciao a tutti");

// /* ESERCIZIO 4
//   Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
//   Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
// */

console.log("\nEsercizio 4\n");

function deleteOne(string, bool) {
  if (bool === true) {
    //if(bool) uguale a quello che ho scritto
    let canc = string.slice(1);
    console.log(canc);
  } else {
    let canc = string.slice(0, -1);
    console.log(canc);
  }
}
// deleteOne("ciao sono dany", false);

// /* ESERCIZIO 5
//   Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

//   Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
// */

console.log("\nEsercizio 5\n");

function onlyLetters(frase) {
  let arrayDiLettere = frase.split("/");
  arrayFinale = [];
  arrayDiLettere.forEach((lettera) => {
    if (isNaN(lettera)) {
      //vero se lettera è una lettera, falso se letetra è un numero
      console.log(lettera);
      arrayFinale.push(lettera);
    }
  });
  return arrayFinale.join("");
}
console.log(onlyLetters("I have 4 dogs"));

// /* ESERCIZIO 6
//   Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
// */
console.log("\nEsercizio 6\n");

function isThisAnEmail(mail) {
  console.log(mail.includes("@" && ".com"));
}
isThisAnEmail("dany@mail.com");

// /* ESERCIZIO 7
//   Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
// */
console.log("\nEsercizio 7\n");

function whatDayIsIt() {
  let today = new Date();
  let day = today.getDay();
  switch (day) {
    case 0:
      console.log("Domenica");
    case 1:
      console.log("Lunedi");
    case 2:
      console.log("Martedi");
    case 3:
      console.log("Mercoledi");
    case 4:
      console.log("Giovedi");
    case 5:
      console.log("Venerdi");
    case 6:
      console.log("Sabato");
  }
  // console.log(day);
}
whatDayIsIt();

// /* ESERCIZIO 8
//   Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
//   Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
//   il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
//   L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

//   Example:
//   rollTheDices(3) => ritorna {
//       sum: 10
//       values: [3, 3, 4]
//   }
// */
console.log("\nEsercizio 8\n");
let rollTheDices = function (n) {
  let oggetto = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < n; i++) {
    let risultato = dice();
    oggetto.sum += risultato;
    oggetto.values.push(risultato);
  }
  return oggetto;
};
rollTheDices(5);
// console.log(diceLunch);

// /* ESERCIZIO 9
//   Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
// */
console.log("\nEsercizio 9\n");

function howManyDays(date) {
  let currentDate = new Date();
  let timeDifference = currentDate.getTime() - date.getTime();
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}
console.log(howManyDays(new Date(2021, 11, 17)));

// /* ESERCIZIO 10
//   Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
// */
console.log("\nEsercizio 10\n");
function isTodayMyBirthday(compleanno, today) {
  console.log(today);
  let day = today.getDate();
  let mounth = today.getMonth();
  let arrayData = compleanno.split("/");
  let [giornoComple, meseComple, annoComple] = arrayData;
  if (meseComple === mounth && giornoComple === day) console.log("AUGURI");
}
isTodayMyBirthday("11/17/2001", new Date());
//   let birthday = new Date(stringa);
//   if (mounth === today.getMonth) {
//     if (birthday.getDate === day) console.log(true);
//   } else console.log(false);

// // Arrays & Oggetti

// // NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// /* ESERCIZIO 11
//   Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
//   in esso la proprietà chiamata come la stringa passata come secondo parametro.
// */

console.log("\nEsercizio 11\n");
let io = { name: "Daniele", cognome: "Testi", age: 20 };
const deleteProp = (obj, stringa) => {
  delete obj[stringa];
  return obj;
};
console.log(deleteProp(io, "name"));

// /* ESERCIZIO 12
//   Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
// */

console.log("\nEsercizio 12\n");
let anno = 0;
let data = 0;
let filmNuovo = "";
function newestMovie() {
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > anno) {
      anno = parseInt(movies[i].Year);
      filmNuovo = movies[i].Title;
    }
  }
  console.log(filmNuovo);
}
newestMovie();

// /* ESERCIZIO 13
//   Scrivi una funzione chiamata "countMovies" che ritorna il numero di film contenuti nell'array "movies" fornito.
// */

console.log("\nEsercizio 13\n");

const countMovies = (array) => {
  return array.length;
};

console.log(countMovies(movies));

// /* ESERCIZIO 14
//   Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
// */

console.log("\nEsercizio 14\n");

anni = [];

function onlyTheYears() {
  for (let i = 0; i < movies.length; i++) {
    anni[i] = movies[i].Year;
  }
  console.log(anni);
}
onlyTheYears();

// /* ESERCIZIO 15
//   Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
// */

console.log("\nEsercizio 15\n");

filmDueMila = [];
data = 0;
function dueMila() {
  for (let i = 0; i < movies.length; i++) {
    data = parseInt(movies[i].Year);
    if (data <= 2000) filmDueMila.push(movies[i].Title);
  }
  console.log(filmDueMila);
}
// console.log(dueMila(movies));
dueMila();

// /* ESERCIZIO 16
//   Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
// */

console.log("\nEsercizio 16\n");

let sommaAnni = 0;
function sumAllTheYears() {
  for (let i = 0; i < movies.length; i++) {
    let anni = parseInt(movies[i].Year);
    sommaAnni = sommaAnni + anni;
  }
  console.log(sommaAnni);
}
sumAllTheYears();

// /* ESERCIZIO 17
//   Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
// */

console.log("\nEsercizio 17\n");

function searchByTitle(stringa) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(stringa)) {
      console.log(movies[i].Title);
    }
  }
}
searchByTitle("Lord");

// /* ESERCIZIO 18
//   Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
//   "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
// */

console.log("\nEsercizio 18\n");
let match = [];
let unmatch = [];
function searchAndDivide(stringa) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(stringa)) {
      match.push(movies[i].Title);
    }
    unmatch.push(movies[i].Title);
  }

  console.log("FILM CHE CONTENGONO " + stringa + " SONO " + match);
  console.log("FILM CHE NON CONTENGONO " + stringa + " SONO " + unmatch);
}
searchAndDivide("Avenger");

// /* ESERCIZIO 19
//   Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
// */
console.log("\nEsercizio 19\n");

function removeIndex(int) {
  for (let i = 0; i < movies.length; i++) {
    if (int - 1 === i) delete movies[i];
    else console.log(movies[i]);
  }
}
removeIndex(14);

// // DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

// /* ESERCIZIO 20
//   Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
// */

console.log("\nEsercizio 20\n");

const searchId = () => {
  const container = document.getElementById("#container");
};

// /* ESERCIZIO 21
//   Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
// */

const tag = () => {
  const allTd = document.querySelectorAll("body td");
};

// /* ESERCIZIO 22
//   Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
// */

const print = () => {
  console.log(td.forEach((elem) => elem.innerText));
};

// /* ESERCIZIO 23
//   Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
// */

const changeA = () => {
  const a = document.querySelectorAll("body a");
  a.forEach((elem) => (elem.style.backgroundColor = "red"));
};

// /* ESERCIZIO 24
//   Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
// */

const addElement = () => {
  const ul = document.getElementById("#myList");
  const li = document.createElement("li");
  li.innerText = "new li";
  ul.appendChild(li);
};

// /* ESERCIZIO 25
//   Scrivi una funzione per svuotare la lista non ordinata con id "myList".
// */

const toEmpty = () => {
  const ul = document.getElementById("#myList");
  ul.toEmpty();
};

// /* ESERCIZIO 26
//   Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
// */

const addClass = () => {
  const tr = document.querySelectorAll("body tr");
  tr.classlist.add("test");
};
// // [EXTRA] JS Avanzato

// /* ESERCIZIO 27
//   Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

//   Esempio:
//   halfTree(3)

//   *
//   **
//   ***

// */

console.log("\n Esercizio 27\n");
function halfTree(num) {
  var output = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      output += "*";
    }
    console.log(output);
    output = "";
  }
}
halfTree(7);

// /* ESERCIZIO 28
//   Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

//   Esempio:
//   tree(3)

//     *
//    ***
//   *****

// */
console.log("\n Esercizio 28\n");

function tree(num) {
  let txt = "";
  for (i = 1; i <= num; i++) {
    txt = "";
    for (j = i; j < num; j++) {
      txt += " ";
    }
    for (k = 0; k < i * 2 - 1; k++) {
      txt += "*";
    }
    console.log(txt);
  }
}
tree(5);
// /* ESERCIZIO 29
//   Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
// */
console.log("\n Exercise 29");
function isItPrime(num) {
  let array = [];
  // if (num % 2 !== 0) {
  //   console.log("primo");
  // } else if (num % 3 !== 0) {
  //   console.log("primo");
  // }

  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(isItPrime(7));
