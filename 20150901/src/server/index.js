const express = require('express');

const app = express()
const port = 5000
const fs = require('fs');

app.set('views', "./");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname))

app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/html/index.html')
})

app.get('/login', function(req, res) {
  res.sendFile(__dirname+'/html/login.html');
});

app.get('/generate', function(req, res) {
  res.sendFile(__dirname+'/html/generate.html');
});

app.listen(5000,()=>{
  console.log("Server Connected")
})