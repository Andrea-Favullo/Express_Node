//permette di utilizzare comandi più brevi
var express = require('express');

//istanza di express
var app = express();

//la pagina html
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//crea il server, quando apre la porta avvia la funzione di call-back
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
