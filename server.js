// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});

app.get('/todos', (req, res) => {
  res.send('<ul><li>Di Cho</li><li>Nau Com</li><li>Rua Bat</li><li>Hoc Code tai CodersX</li></ul>');        
});


// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
