// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug');
app.set('views', './views');

var todos = ['Đi chợ', 'Nấu cơm', 'Rửa bát', 'Học code tại CodersX'];
// https://expressjs.com/en/starter/basic-routing.html
app.get('/todos', (request, response) => {  
  response.render('index', {
    list: todos
  });
});
app.post('/todos/create', (req, res) => {
  todos.push(req.body.new);
  res.redirect('/todos');
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
