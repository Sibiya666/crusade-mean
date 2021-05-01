const Position = require('../models/Position');
const Category = require('../models/Category');
const errorHandler = require('../utils/error-handler');

module.exports.get = async (req, res) => {
    try {
        const categoryList = await Category.find({ user: req.user.id });
        res.status(200).json(categoryList);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.getById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.deleteById = async (req, res) => {
    try {
        const idCategory = req.params.id;

        await Category.remove({ _id: idCategory });
        await Position.remove({ category: idCategory });

        res.status(200).json({
            message: 'delete success',
        });
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.add = async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name,
            imageSrc: req.file,
            user: req.user.id,
        }).save();

        res.status(201).json(category);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.updateById = async (req, res) => {
    try {
        const { body, params, file } = req;
        const update = {
            name: body.name,
        };

        if (file) {
            updade.imageSrc = file.path;
        }

        const category = await Category.findOneAndUpdate(
            { _id: req.params, id },
            { $set: update },
            { new: true }
        );

        res.status(200).json(category);
    } catch (e) {
        errorHandler(res, e);
    }
};
