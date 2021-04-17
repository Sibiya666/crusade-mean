const express = require('express');
const AnalyticsController = require('../controllers/analytics');

const router = express.Router();

router.post('/overview', AnalyticsController.overview);
router.post('/analytics', AnalyticsController.analytics);

module.exports = router;