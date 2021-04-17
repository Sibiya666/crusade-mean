const express = require('express');
const passport = require('passport');

const PositionController = require('../controllers/position');

const router = express.Router();

router.get('/:category', passport.authenticate('jwt', {session: false}), PositionController.get);
router.post('/', passport.authenticate('jwt', {session: false}), PositionController.add);
router.patch('/:id', passport.authenticate('jwt', {session: false}), PositionController.update);
router.delete('/delete', passport.authenticate('jwt', {session: false}), PositionController.delete);

module.exports = router;