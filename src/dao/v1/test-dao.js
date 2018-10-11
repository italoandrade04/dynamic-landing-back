'use strict';

exports.getAll = (req, res, next) => {
    res.status(200).send('<h1>Function test for simple nodejs</h1>')
}

exports.get = (req, res, next) => {
    res.status(200).send(`<h1> Test search with id = ${req.params.id}</h1>`);
}

exports.post = (req, res, next) => {
    res.status(200).send(`<h1> Test post function with body = ${req.body}</h1>`);
}

exports.put = (req, res, next) => {
    res.status(200).send(`<h1> Test put function with id = ${req.params.id} and body = ${req.body}</h1>`);
}

exports.delete = (req, res, next) => {
    res.status(200).send(`<h1> Test delete with id = ${req.params.id}</h1>`);
}