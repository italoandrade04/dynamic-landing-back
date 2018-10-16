'use strict';

let compModel = require('../../model/v1/components-model');

exports.getAll = (req, res, next) => {
    compModel.find({}, (err, response) => {
        if (err) {
            res.status(400).send({ message: 'Não foram encontrados dados' });
        } else {
            res.status(200).send(response);
        }
    });
}

exports.findById = (req, res, next) => {
    compModel.findById(req.params.id, (err, response) => {
        if (err) {
            res.status(400).send({ message: 'Não foram encontrados dados' });
        } else {
            res.status(200).send(response);
        }
    });
}

exports.create = (req, res, next) => {
    let component = new compModel();
    let body = req.body;
    component.screenOrder = parseInt("" + body.screenOrder);
    component.locale = body.locale;
    component.title = body.title;
    component.component = body.component;
    compModel.create(component, (err, response) => {
        if (err) {
            res.status(400).send({ message: 'Não foi possivel incluir os dados' });
        } else {
            res.status(200).send(response);
        }
    })
}

exports.update = (req, res, next) => {
    compModel.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
        if (err) {
            res.status(400).send({ message: 'Não foi possivel alterar os dados' });
        } else {
            res.status(200).send(response);
        }
    });
}

exports.delete = (req, res, next) => {
    compModel.findByIdAndRemove(req.params.id, (err, response) => {
        if (err) {
            res.status(400).send({ message: 'Não foram encontrados dados' });
        } else {
            res.status(200).send(response);
        }
    })
}