//permette di utilizzare comandi più brevi
var express = require('express');

//istanza di express
var app = express();


//importo la libreria path
const path = require('path');
//__dirname : Ritorna la cartella del progetto

//pagina principale
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
//pagina map-site
app.get('/site-map', function (req, res) {
    res.sendFile(path.join(__dirname, 'sitemap.html'));
});
//pagina about
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
});

//crea il server, quando apre la porta avvia la funzione di call-back
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
