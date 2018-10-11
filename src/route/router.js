'use strict';

const express = require('express');

let app = express();
let router = express.Router();
let routerV1 = require('./v1/router');

app.use('/v1', routerV1);

module.exports = app;