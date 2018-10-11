'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();
let route = require('./src/route/router');

app.use(cors({origin: '*'}));

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', route);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = app;