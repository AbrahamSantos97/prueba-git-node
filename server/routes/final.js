const express = require('express');
const app = express();
app.set('view engine', 'hbs');

app.get('/final', (req, res) => {
    res.render('final');
});

module.exports = app;