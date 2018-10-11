'use strict';

const express = require('express');

let app = express();
let route = require('./src/route/router');

app.use('/api', route);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = app;