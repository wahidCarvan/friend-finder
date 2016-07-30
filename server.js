// requiring express
var PORT = 3000;
var express = require('express');
// creates an express app
var app = express()
// get  a route
//request is  a object with the users request response is what they are given back 
  app.get('/',function(req,res){
// __ dirname looking at where we are now and re
console.log(__dirname);
res.sendFile(__dirname + '/app/public/home.html')

});
app.get('/survey',function(req,res){
// __ dirname looking at where we are now and re
console.log(__dirname);
res.sendFile(__dirname + '/app/public/survey.html')

});
// starts the server
app.listen(PORT, function(){
  // testing to make sure the server is running
  console.log('Now listening on port:%s', PORT);
})


   