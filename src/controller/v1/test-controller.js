'use strict';

const testDao = require('../../dao/v1/test-dao')

exports.getAll = (req, res, next) => {
    testDao.getAll(req, res, next);
}

exports.get = (req, res, next) => {
    testDao.get(req, res, next);
}

exports.post = (req, res, next) => {
    testDao.post(req, res, next);
}

exports.put = (req, res, next) => {
    testDao.put(req, res, next);
}

exports.delete = (req, res, next) => {
    testDao.delete(req, res, next);
}