const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
console.log("------- Esercizio 0");
for(i = 0; i < teachers.length; i++){
  console.log(`${teachers[i]} è l'insegnante in posizione ${i}`);
}

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
console.log("------- Esercizio 1");
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
console.log("------- Esercizio 2");
teachers.splice(4,1,'Patrick');
console.log(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
console.log("------- Esercizio 3");
const lastTeacher = teachers[teachers.length - 1];
teachers.pop();
console.log(teachers);
console.log(lastTeacher);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
console.log("------- Esercizio 4");
const firstTeacher = teachers[0];
teachers.shift();
console.log(teachers);
console.log(firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
console.log("------- Esercizio 5");
teachers.push('Vanessa');
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
console.log("------- Esercizio 6");
teachers.unshift('Sarah');
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
console.log("------- Esercizio 7");
let isFabioPresent = false;
for(i = 0; i < teachers.length; i++){
  if (teachers[i] == "Fabio"){
    isFabioPresent = true;
  }
}
console.log(isFabioPresent);



// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
console.log("------- Esercizio 8");
let lewisIndex = null;
for(i = 0; i < teachers.length; i++){
  if (teachers[i] == "Lewis"){
    lewisIndex = i;
  }
}
console.log(lewisIndex);


// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
console.log("------- Esercizio 9");
let teachersString;
for(i = 0; i < teachers.length; i++){
  if (i==0){
    teachersString=`${teachers[i]}`;
  } else{
    teachersString=`${teachersString}, ${teachers[i]}`;
  }
}
console.log(teachersString);



// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
console.log("------- Esercizio 10");
let isTeachersEmpty = false;
if (teachers.length==0){
  isTeachersEmpty= true
}
console.log(isTeachersEmpty);
