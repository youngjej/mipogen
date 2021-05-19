const path = require("path");
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();
const server = require('http').createServer(app);

server.listen(port, function() {
    console.log("Server listening at port %d", port);
});

app.use(express.static(__dirname + '../client/'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// const express = require('express');
// const app = express();

// const server = app.listen(3000, () => {
//   console.log('Server connected.');
// })