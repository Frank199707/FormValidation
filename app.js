
var express = require('express')
var bodyParser = require('body-parser')
var fileUpload = require('express-fileupload')
var app = express()
var fs = require('fs')
app.use(fileUpload());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/step1.html', function(req, res) {
      res.redirect('/success.html');
});

app.listen(3000,()=> {
  console.log('great');
})
