const express = require('express');
const app = express();
const PORT = 3005;

const productsRouter = require('./Routes/Products.routes');
const UsersRouter = require('./Routes/Users.routes');

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/users', UsersRouter);

const server = app.listen(PORT, () => {
  console.log('listening on port ' + server.address().port); // gets port
});
