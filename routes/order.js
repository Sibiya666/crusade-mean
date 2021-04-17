const express = require('express');
const OrderController = require('../controllers/order');

const router = express.Router();

router.get('/', OrderController.get);
router.post('/', OrderController.add);

module.exports = router;