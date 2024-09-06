const TVA_RATE = 0.2;

function Article(id, designation, description, prixUht) {
  this.id = id;
  this.designation = designation;
  this.description = description;
  this.prixUht = prixUht;
  //   this.getPriceWithTaxes = function () {
  //     return this.prixUht * (1 + TVA_RATE);
  //   };
}

Article.prototype.getPriceWithTaxes = function () {
  return this.prixUht * (1 + TVA_RATE);
};

const article = new Article(1, "Ps5", "Un produit de Sony", 450);
const article2 = new Article(2, "Xbox One", "Produit de Microsoft", 560);
const article3 = new Article(3, "Macbook Pro 16 M3", "Produit de Apple", 4500);
