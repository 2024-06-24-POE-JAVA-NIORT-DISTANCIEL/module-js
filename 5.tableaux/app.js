// Création d'un tableau vide
const tb = [];

// Création et initialisation d'un tableau
const tb2 = [12, 15, 17, 9, 8, 15];
console.log(tb2[0]); //12
console.log(tb2[1]); //15
console.log(tb2[2]); //17

tb2[1] = 45;

// const tb3 = [23, true, "papy"];

const countries = ["France", "Germany", "USA"];

// Ajout à la fin du tableau
countries.push("South Korea");
countries.push("North Korea");

// Retirer à la fin du tableau
countries.pop();

//  Insérer au début du tableau
countries.unshift("Spain");
countries.unshift("South Africa");

// Retirer au début du tableau
countries.shift();
countries.shift();

// Itérer sur un tableau
for (let i = 0; i < countries.length; i++) {
  console.log("Avec une boucle for classique : ", countries[i]);
}

for (let country of countries) {
  console.log("Avec la boucle for of : ", country);
}
