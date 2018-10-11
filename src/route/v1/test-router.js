'use strict';

const express = require('express');

let router = express.Router();
let testController = require('../../controller/v1/test-controller');
//path : http://localhost:3000/api/v1/test

router.get('/', testController.getAll);
router.get('/:id', testController.get);
router.post('/', testController.post);
router.put('/:id', testController.put);
router.delete('/:id', testController.delete);


module.exports = router;