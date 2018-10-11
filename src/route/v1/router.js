'use strict';

const express = require('express');

let app = express();
let testRouter = require('./test-router')

app.use('/test/', testRouter);

module.exports = app;