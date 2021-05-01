const express = require('express');
const passport = require('passport');
const OrderController = require('../controllers/order');

const router = express.Router();

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    OrderController.get
);
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    OrderController.add
);

module.exports = router;
