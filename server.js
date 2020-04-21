// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

// https://expressjs.com/en/starter/basic-routing.html


app.set('views', './views'); 
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var todoLists = ['Đi Chợ', 'Nấu Cơm', 'Rửa Bát', 'Học Code tại CodersX'];

app.get('/', (request, response) => {
  response.send('I love CodersX');
});

app.get('/todos',(req,res) =>{
  res.render('index.pug', {
    todoLists: todoLists
  });
});


app.get('/todos/search', function(req,res){
  var q = req.query.q;
  var matchedTodo = todoLists.filter(function(todo){
    return todo.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('index.pug', {
    todoLists: matchedTodo
  });
});

app.post('/todos/create', function(req,res){
  todoLists.push(req.body.todo);
  res.redirect('/todos');
})
app.get('/todos/create', function(req,res){
  res.render('create.pug')
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
