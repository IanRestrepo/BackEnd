const express = require('express');
const router = express.Router();
// const ProductsAPI = require('../ProductsData');
const productService = require('../Services/Product.service')
const service = new productService();


// [GET] Products

router.get('/', (req, res) => {
  const products = service.find();
  res.json(ProductsAPI);
});

router.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  const singleProduct = ProductsAPI.find((product) => product.id === productId);

  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.json({ message: 'Ups not found' });
  }
});

router.get('/api/products/similar/:productName', (req, res) =>{
  const { productName } = req.params;
  const products = ProductsAPI.filter(product => product.Product.toLowerCase().includes(productName.toLowerCase())); //gets products with similar name

  if(products){
    res.json(products);
  } else {
    res.json({message: 'Umm please watch if you write well the product name...'})
  }
});

// [POST] Products

router.post('/', (req, res)=> {
  const { Product, Price, Author } = req.body;


  if( Product && Price && Author) {
    ProductsAPI.push(Product, Price, Author);
    res.json({
      message: 'Created',
      data: {
        "Product": Product,
        "Price": Price,
        "Author": Author
      }
    })
  } else {
    res.json({message: 'Error POST Method not used correctly'});
  }

})

module.exports = router;
