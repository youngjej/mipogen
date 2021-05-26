// const path = require("path");
// const express = require("express");

// const port = process.env.PORT || 3000;

// const app = express();
// const server = require('http').createServer(app);

// server.listen(port, function() {
//     console.log("Server listening at port %d", port);
// });

// app.use(express.static(__dirname + '../client/'));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;
const server = require('http').createServer(app);

app.use('/public', express.static(__dirname + '../client'));

server.listen(port, () => {
  console.log('Server connected.');
})

app.set('views', __dirname + "/../client/");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  // res.render('index.html');
  res.sendFile(path.join(__dirname, '../client/index2.html'))
});

app.get('/login', function(req, res) {
  res.render('login.html');
});

app.get('/generate', function(req, res) {
  res.render('generate.html');
});