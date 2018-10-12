const app = require('./app');

app.listen(8000, () => {
  global.serverStart = Date.now();
  console.log('Home work listening on port 8000.');
});
