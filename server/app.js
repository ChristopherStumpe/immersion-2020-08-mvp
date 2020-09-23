const express = require('express');
const path = require('path');
const { myRouter } = require('./myRouter');

const app = express();
const CLIENT_PATH = path.join(__dirname, '../client/dist');
app.use(express.json());
app.use(express.static(CLIENT_PATH));
app.use('/myRouter', myRouter);
module.exports = {
  app,
};
