'use strict';

const express = require('express');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');
const PORT = process.env.PORT || 3002;
const characterRouter = require('./routes/character');
const app = express();

app.use(express.json());


app.use(characterRouter); 

app.get('/bad', (req, res, next) => {
  next('we have an error');
});

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log('server running'));
};

module.exports = { start, app };