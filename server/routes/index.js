const express = require('express');
const app = express();
app.use(require('./inicio.js'));
app.use(require('./intermedio.js'));

module.exports = app;