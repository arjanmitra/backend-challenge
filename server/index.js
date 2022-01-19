const axios = require('axios');
const path = require('path');
const morgan = require('morgan');
const init = require('./db/index');

const express = require('express');
const app = express();

const port = process.env.PORT || 9999;

init();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`listening on port: ${port}`));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/api/products/', require('./api/productRoute'));
