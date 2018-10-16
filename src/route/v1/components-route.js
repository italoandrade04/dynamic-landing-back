'use strict';

const express = require('express');

let router = express.Router();
let compController = require('../../controller/v1/components-controller');
// path : http://localhost:3000/api/v1/components

router.get('/', compController.getAll);
router.get('/:id', compController.find);
router.post('/', compController.create);
router.put('/:id', compController.update);
router.delete('/', compController.delete);

module.exports = router;