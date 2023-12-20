const ProductsData = require('../ProductsData');
class ProductService {

  constructor() {
    this.products = ProductsData;
  }


  create() {

  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id)
  }

  update() {

  }

  delete() {

  }

}

module.exports = ProductService;
