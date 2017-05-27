var  express = require('express')
var consolidate = require('consolidate')
var bodyparser = require('body-parser')
var Books = require('./models').Books
var app = express()

// var Message = require('./database').Books;

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('./static'));

app.get('/', function (request, response) {
  // response.render('index.html');
    Books.findAll().then(function(results){
      var book = results;
      console.log(book[0].title);
      response.render('index.html', {
              //this will loop from the books table to show it to the htmls
              books: results
      });
    })
});

// app.post('/', function(req,res){
//           var message = request.body.message;
//           var email = request.body.email;
//           Message.create({
//
//           })
// });
app.listen(3004, function(){
      console.log('Server is now listening at port 3004');
});
