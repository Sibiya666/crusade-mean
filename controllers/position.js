const Position = require('../models/Position');
const errorHandler = require('../utils/error-handler');

module.exports.getById = async (req, res) => {
    try {
        const { user, params } = req;
        const positionList = await Position.find({
            user: user.id,
            category: params.categoryId,
        });

        res.status(200).json(positionList);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.add = async (req, res) => {
    try {
        const { body, user } = req;
        const { name, cost, category } = body;
        const position = await new Position({
            name,
            cost,
            category,
            user: user.id,
        }).save();

        res.status(201).json(position);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const position = await Position.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(position);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.delete = async (req, res) => {
    try {
        await Position.remove({ _id: req.params.id });
        res.status(200).json({
            message: 'delete success',
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
