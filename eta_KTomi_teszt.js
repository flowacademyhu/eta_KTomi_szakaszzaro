const aritm = require('./modul_calc'); // modul importálása a 7-es feladathoz
const rl = require('readline-sync');

// 1. Adattípusok lehetnek változók vagy konstansok

// a változókat let-tel deklaráljuk, nem kötelezően kaphat kezdeti értéket,
// új értéket kaphatnak. Konstansokat const-tal deklaráljuk, nem kaphatnak
// új értéket. Primitív adattípusok:

// string
let a = 'karakterlánc';

// szám, integer vagy float
let b = 4;
let c = 3.14;

// logikai érték, azaz boolean
let d = true;
let e = false;

// összetett adattípusok:
// tömb (array)
let f = [1, 2, 'text', true, null];

// több dimenziós tömb (matrix)
let g = [[1, 2, 3], ['egy', 'ketto', 'harom'], [true, false, null]];

// object (kulcs: érték párok)
let h = { name: 'Tomi', age: '31', address: 'Szeged' };

// 2. függvények meghívásakor paramétereket adunk át neki,
// ezeket gyakran módosítjuk a függvényen belül. A primitív
// adattípusok érték szerint adódnak át, tehát a módosítások
// nem érintik az eredeti változó értékét.
// Referencia szerinti átadás esetén (pl. tömböknél)
// a függvényen belüli változtatások hatással vannak az eredeti
// tömbre is.

let v = 34;
let fruits = ['apple', 'pear', 'orange'];

const myFunction = (variable, array) => {
  variable = 50;
  array.push('melone');
  console.log(variable); // a függvényben kapott új érték kerül kiíratásra
};
myFunction(v, fruits);

console.log(v); // az eredeti érték kerül kiíratása
console.log(fruits); // a függvényben végzett módosítással íródik ki
console.log();

// 3. összeadás tétel
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getSum = input => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
};
console.log('3. Összeadás tétel eredménye: ' + getSum(numbers));
console.log();

// 4. megszámlálás tétel
let numbs = [1, 1, 2, 3, 4, 5, 3, 6, 4, 1];

const count = (num, input) => {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === num) {
      counter++;
    }
  }
  return counter;
};
console.log(`1-es szám előfordulásainak száma ${numbs} tömbben: ` + count(1, numbs));
console.log();

// 5. switch
const sw = 2;

const useSwitch = num => {
  switch (num) {
    case 1:
      return 'Egy';
    // alapesetben minden case kódblokk végén a break; parancsot kell használnunk, de itt a return kilép a függvényből.
    case 2:
      return 'Kettő';
    case 3:
      return 'Három';
    default:
      console.log('Nincs szám');
  }
};
console.log(useSwitch(sw));
console.log();

// 6. metszet
const intersect = (input1, input2) => {
  const inters = [];
  for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input2.length; j++) {
      if (input1[i] === input2[j]) {
        inters.push(input1[i]);
        break; // kilép a belső for ciklusból, így az egyező szám akkor is csak egyszer kerül a kimeneti tömbbe, ha többször is előfordul a vizsgált elem
      }
    }
  }
  return inters;
};
console.log('- Két tömb metszete: ', intersect(numbers, numbs));
console.log();

// 7. aritmetikai modul
console.log('Összeadás, 3+4 = ' + aritm.add(3, 4));
console.log('Kivonás, 5-2 = ' + aritm.subtr(5, 2));
console.log('Szorzás, 3*4 = ' + aritm.mult(3, 4));
console.log('Osztás, 8/4 = ' + aritm.div(8, 4));
console.log();

// 8. kétdimenziós tömb (mátrix) generátor
const n = rl.question('Kérem a leendő mátrix n paraméterét: ');
const m = rl.question('Kérem a leendő mátrix m paraméterét: ');

const matrixGen = (n, m) => {
  let matrix = [];
  let pows = 1;
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++) {
      matrix[i].push(pows);
      pows *= 2;
    }
  }
  return matrix;
};
console.log(matrixGen(n, m));
