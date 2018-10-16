'use strict';

let compDao = require('../../dao/v1/components-dao');

exports.getAll = (req, res, next) => {
    compDao.getAll(req, res, next);
}

exports.find = (req, res, next) => {
    compDao.findById(req, res, next);
}

exports.create = (req, res, next) => {
    compDao.create(req, res, next);
}

exports.update = (req, res, next) => {
    compDao.update(req, res, next);
}

exports.delete = (req, res, next) => {
    compDao.delete(req, res, next);
}

exports.bulkCreate = (req, res, next) => {
    let simpleCreate = this.create;
    req.body.components.map(d => {
        let request = {
            body: d
        }
        // usar função de criar dado simples
    })
}