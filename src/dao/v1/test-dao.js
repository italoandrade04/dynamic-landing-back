'use strict';

exports.funcTest = (req, res, next) => {
    res.status(200).send('<h1>Function test for simple nodejs</h1>')
}