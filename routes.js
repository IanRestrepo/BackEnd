
const express = require('express');

const app = express();

const PORT = 3001;


app.get('/', (req, res)=> {
  res.send('Hola BackendCourse')
});

app.get('/products', (req, res)=> {
  res.json([
    {
      id: 1,
      name: 'Product 1',
      price: 100000
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200000
    }
  ]);
});

app.get('/products/:id', (req, res) => { // get products by ID

  const { id } = req.params; // it is the :id
  res.json({
    id,
    name: 'Product 2',
    price: 200000
   })
});

app.get('/categories/:categoryId/products/:productId', (req, res)=> {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

app.listen(PORT, ()=> {
  console.log('Successfull task');
});
