const express = require('express');
const CategoryController = require('../controllers/category');

const router = express.Router();

router.get('/', CategoryController.get);
router.get('/:id', CategoryController.getById);
router.delete('/:id', CategoryController.deleteById);
router.post('/', CategoryController.add);
router.patch('/:id', CategoryController.updateById);

module.exports = router;