for (let i = 2; i <= 10; i++) {
  console.log(`Le carré de ${i} est ${Math.pow(i, 2)}`);
}

// Table multi
let nombre = prompt("Entrez un nombre : ");
nombre = parseFloat(nombre);

let borneInferieure = parseFloat(prompt("Entrez la borne inférieure : "));
let borneSuperieur = parseFloat(prompt("Entrez la borne supérieure : "));

for (let i = borneInferieure; i <= borneSuperieur; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
