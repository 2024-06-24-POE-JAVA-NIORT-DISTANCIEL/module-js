class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(name) {
    this.products = this.products.filter((p) => p.name !== name);
  }

  getTotal() {
    return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
  }
}
