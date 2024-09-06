// v1

// const tb1 = Array.from({ length: 10 }, function () {
//   return Math.floor(Math.random() * 100) + 1;
// });

// const tb2 = Array.from({ length: 5 }, () => {
//   return Math.floor(Math.random() * 100) + 1;
// });

// Arrow functions
// Fat arrow functions
// Fonctions flechées
// const tb3 = Array.from(
//   { length: 3 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// const tb4 = Array.from(
//   { length: 7 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// v2
function generateArrayWithRandomValues(size, limit = 100) {
  return Array.from({ length: size }, () => {
    return Math.floor(Math.random() * limit) + 1;
  });
}

const tb1 = generateArrayWithRandomValues(10, 5);
const tb2 = generateArrayWithRandomValues(5);
const tb3 = generateArrayWithRandomValues(3);
const tb4 = generateArrayWithRandomValues(7);

// Beaucoup de duplication
// let sommeMultiplesDe3Tableau1 = 0;
// for (let i = 0; i < tb1.length; i++) {
//   if (tb1[i] % 3 === 0) {
//     sommeMultiplesDe3Tableau1 += tb1[i];
//   }
// }

// let sommeMultiplesDe3Tableau2 = 0;
// for (let i = 0; i < tb2.length; i++) {
//   if (tb2[i] % 3 === 0) {
//     sommeMultiplesDe3Tableau2 += tb2[i];
//   }
// }

// let sommeMultiplesDe3Tableau3 = 0;
// for (let i = 0; i < tb3.length; i++) {
//   if (tb3[i] % 3 === 0) {
//     sommeMultiplesDe3Tableau3 += tb3[i];
//   }
// }
// let sommeMultiplesDe3Tableau4 = 0;
// for (let i = 0; i < tb2.length; i++) {
//   if (tb4[i] % 3 === 0) {
//     sommeMultiplesDe3Tableau4 += tb4[i];
//   }
// }

// console.log(`
//     Somme multiples 3 tb1 : ${sommeMultiplesDe3Tableau1}
//     Somme multiples 3 tb2 : ${sommeMultiplesDe3Tableau2}
//     Somme multiples 3 tb3 : ${sommeMultiplesDe3Tableau3}
//     Somme multiples 3 tb4 : ${sommeMultiplesDe3Tableau4}
//     `);

// v3 : Création d'une fonction
// function sumMultiplesOf3(arr) {
//   let sum = 0;
//   for (let value of arr) {
//     if (value % 3 === 0) {
//       sum += value;
//     }
//   }
//   return sum;
// }

// let sommeMultiplesDe3Tableau1 = sumMultiplesOf(3, tb1);
// let sommeMultiplesDe3Tableau2 = sumMultiplesOf(3, tb2);
// let sommeMultiplesDe3Tableau3 = sumMultiplesOf(3, tb3);
// let sommeMultiplesDe3Tableau4 = sumMultiplesOf(3, tb4);

// console.log(`
//     Somme multiples 3 tb1 : ${sommeMultiplesDe3Tableau1}
//     Somme multiples 3 tb2 : ${sommeMultiplesDe3Tableau2}
//     Somme multiples 3 tb3 : ${sommeMultiplesDe3Tableau3}
//     Somme multiples 3 tb4 : ${sommeMultiplesDe3Tableau4}
//     `);

// v4 : Création d'une fonction générique

function sumOfMultiplesOf(number, arr) {
  let sum = 0;
  for (let value of arr) {
    if (value % number === 0) {
      sum += value;
    }
  }
  return sum;
}

const sommeMultiplesDe3Tableau1 = sumOfMultiplesOf(3, tb1);
const sommeMultiplesDe3Tableau2 = sumOfMultiplesOf(3, tb2);
const sommeMultiplesDe3Tableau3 = sumOfMultiplesOf(3, tb3);
const sommeMultiplesDe3Tableau4 = sumOfMultiplesOf(3, tb4);

console.log(`
    Somme multiples 3 tb1 : ${sommeMultiplesDe3Tableau1}
    Somme multiples 3 tb2 : ${sommeMultiplesDe3Tableau2}
    Somme multiples 3 tb3 : ${sommeMultiplesDe3Tableau3}
    Somme multiples 3 tb4 : ${sommeMultiplesDe3Tableau4}
    `);
