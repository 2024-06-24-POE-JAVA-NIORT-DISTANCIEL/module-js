const numbers = [2, 3, 4, 5, 6];

let numbersCarre = [];
for (let i = 0; i < numbers.length; i++) {
  numbersCarre.push(Math.pow(numbers[i], 2));
}

// Map
let numbersCarreMap = numbers.map(function (n) {
  return Math.pow(n, 2);
});

const fruits = ["pomme", "banane", "orange"];
const fruitsMap = fruits.map(function (fruit) {
  return (fruit + "s").toUpperCase();
});

const users = [
  { id: 1, firstName: "Christian", lastName: "Lisangola", isActive: true },
  { id: 2, firstName: "André", lastName: "Le geant", isActive: false },
  { id: 3, firstName: "Zombie", lastName: "Abc", isActive: false },
];

const usersMap = users.map(function (user) {
  return { id: user.id, name: `${user.firstName} ${user.lastName}` };
});

// Filter
// const numberFiltered = numbers.filter(function (n) {
//   return n >= 4;
// });
const numberFiltered = numbers.filter((n) => n >= 4);
const zombies = users.filter((user) => user.firstName.startsWith("Zo"));
const inactiveUsers = users.filter((user) => !user.isActive);

// Find
const userById = users.find((user) => user.id === 2);

// forEach
fruits.forEach((fruit) => console.log(fruit));

// reduce
const somme = numbers.reduce((result, n) => result + n, 0);
