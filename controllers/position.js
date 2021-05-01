const Position = require('../models/Position');
const errorHandler = require('../utils/error-handler');

module.exports.getById = (req, res) => {
    const { user, params } = req;
};

module.exports.add = (req, res) => {
    res.status(200).json({
        msg: 'add',
    });
};

module.exports.update = (req, res) => {
    res.status(200).json({
        msg: 'update',
    });
};

module.exports.delete = (req, res) => {
    res.status(200).json({
        msg: 'delete',
    });
};
