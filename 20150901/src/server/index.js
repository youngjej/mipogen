const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyCae2uqJS-JQi2jhZn6OMT8Wr88VaIxZT4",
  authDomain: "minimal-poster-generator.firebaseapp.com",
  projectId: "minimal-poster-generator",
  storageBucket: "minimal-poster-generator.appspot.com",
  messagingSenderId: "546954787173",
  appId: "1:546954787173:web:0632bbae55750c641cc98c",
  measurementId: "G-8GFP2EKGC6"
}

firebase.initializeApp(firebaseConfig);

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

app.listen(3000,()=>{
  console.log("Server Connected")
})