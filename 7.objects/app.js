const TVA_RATE = 0.2;

const article = {
  id: 1,
  designation: "PS5",
  description: "Un produit de SONY",
  prixUHT: 450,
  getPriceWithTaxes() {
    return this.prixUHT * (1 + TVA_RATE);
  },
};

console.log(`
    ID : ${article.id}
    Designation: ${article.designation}\n
    ${article.description}
    ${article.prixUHT} €
    `);
