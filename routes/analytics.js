const express = require('express');
const passport = require('passport');

const AnalyticsController = require('../controllers/analytics');

const router = express.Router();

router.post('/overview', passport.authenticate('jwt', {session: false}), AnalyticsController.overview);
router.post('/analytics', passport.authenticate('jwt', {session: false}),AnalyticsController.analytics);

module.exports = router;