'use strict';

const express = require('express');

let app = express();
let route = require('./src/route/router');

app.use('/api', route);


app.listen(3000, () => {
    console.log('Servidor Rodando na porta 3000!');
})