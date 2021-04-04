var express = require('express');
var app = express();
var fs = require("fs");

var book = {
    "book4" : {
        "author" : "umagaythri",
        "title" : "ExpressJs",
        "publilshedDate" : "3/03/2021",
        "id": 4
    }
 };
 var id = 2;

app.get('/getBookList', function (req, res) {
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(3000, function () {
console.log("Server running on port 3000");
})

app.post('/addBook', function (req, res) {
    fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["book4"] = book["book4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

app.delete('/deleteBook', function (req, res) {
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["book" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})