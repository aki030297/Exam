var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {firstName:'Akshay',lastName:'Kumar',age:22,balance:5000000},
            {firstName:'Amol',lastName:'Kumar',age:22,balance:50000},
            {firstName:'Aishwarya',lastName:'Rai',age:22,balance:40000},
            {firstName:'Vivek',lastName:'Musale',age:22,balance:30000},
            
      ];
  res.send(customers);
};



app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})