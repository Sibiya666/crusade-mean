const express = require('express');
const passport = require('passport');

const CategoryController = require('../controllers/category');

const router = express.Router();

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    CategoryController.get
);
router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    CategoryController.getById
);
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    CategoryController.deleteById
);
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    CategoryController.add
);
router.patch(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    CategoryController.updateById
);

module.exports = router;
