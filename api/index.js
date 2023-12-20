const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3005;

app.use(cors())

const productsRouter = require('./Routes/Products.routes');
const UsersRouter = require('./Routes/Users.routes');

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/users', UsersRouter);

const server = app.listen(PORT, () => {
  console.log('listening on port ' + server.address().port); // gets port
});
