const express = require('express');
const app = express();
app.set('view engine', 'hbs');

app.get('/intermedio', (req, res) => {
    res.render('intermedio.hbs');
});

module.exports = app;