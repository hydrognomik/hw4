const express = require('express');
const { urlencoded } = require('body-parser');

const api = require('./routers/api.js');
const status = require('./routers/status.js');

const app = express();

app.use(urlencoded({ extended: false }));

app.use('/status', status);
app.use('/api', api);

app.get('/*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

module.exports = app;
