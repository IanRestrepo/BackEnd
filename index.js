const express = require('express');
const ProductsAPI = require('./Products');
const UsersAPI = require('./users');
const app = express();
const PORT = 3005;

// [GET] Products

app.get('/api/products', (req, res) => {
  res.json(ProductsAPI);
});

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  const singleProduct = ProductsAPI.find((product) => product.id === productId);

  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.json({ message: 'Ups not found' });
  }
});

app.get('/api/products/similar/:productName', (req, res) =>{
  const { productName } = req.params;
  const products = ProductsAPI.filter(product => product.Product.toLowerCase().includes(productName.toLowerCase())); //gets products with similar name

  if(products){
    res.json(products);
  } else {
    res.json({message: 'Umm please watch if you write well the product name...'})
  }
});

// [GET] Users

app.get('/api/users', (req, res) => {
  res.json(UsersAPI);
})

app.get('/api/users/:_id', (req, res) => {
  const { _id } = req.params;
  const user = UsersAPI.find(user => user.id === parseInt(_id));

  if(user) {
    res.json(user)
  } else {
    res.json({message: 'Not found'})
  }
});

app.get('/api/users/names/:userName', (req, res)=> {
  const { userName } = req.params;
  const users = UsersAPI.find(user => user.username.toLocaleLowerCase().includes(userName.toLocaleLowerCase()));

  if(users){
    res.json(users);
  } else {
    res.json({message: 'Not found'})
  }
})


const server = app.listen(PORT, () => {
  console.log('listening on port ' + server.address().port); // gets port
});
