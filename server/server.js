const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const path = require('path');
app.use(bodyParser.json());
app.use(require('./routes/index'));
app.use(express.static(path.resolve(__dirname, '/views/')));
app.listen(3000, () => {
    console.log("Escuchando el puerto");
});