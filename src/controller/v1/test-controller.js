'use strict';

const testDao = require('../../dao/v1/test-dao')

exports.funcTest = (req, res, next) => {
    testDao.funcTest(req, res, next);
}