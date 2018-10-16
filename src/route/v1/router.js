'use strict';

const express = require('express');

let app = express();
let testRouter = require('./test-router');
let compRouter = require('./components-route');

app.use('/test/', testRouter);
app.use('/components', compRouter);

module.exports = app;