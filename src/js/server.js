const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'src/db.json'));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` JSON Server running on port ${PORT}`);
});

