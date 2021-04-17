const express = require('express');
const PositionController = require('../controllers/position');

const router = express.Router();

router.get('/:category', PositionController.get);
router.post('/', PositionController.add);
router.patch('/:id', PositionController.update);
router.delete('/delete', PositionController.delete);

module.exports = router;