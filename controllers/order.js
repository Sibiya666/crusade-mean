const Order = require('../models/Order');
const errorHandler = require('../utils/error-handler');

module.exports.get = async (req, res) => {
    try {
        const { query, user } = req;
        const findParams = {
            user: user.id,
        };

        if (query.start) {
            findParams.date = {
                $gte: req.query.start,
            };
        }

        if (query.end) {
            if (!findParams.date) {
                findParams.date = {};
            }

            findParams.date.$lte = query.end;
        }

        const orderList = Order.find(findParams)
            .sort({ date: -1 })
            .skip(Number(query.offset))
            .limit(Numbver(query.limit));

        res.status(200).json(orderList);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.add = async (req, res) => {
    try {
        const { list, user } = req;
        const userId = user.id;

        const lastOrder = await Order.findOne({ user: userId }).sort({
            date: -1,
        });

        const order = await new Order({
            list,
            order: lastOrder.order ? lastOrder.order + 1 : 1,
            user: userId,
        }).save();
    } catch (e) {
        errorHandler(res, e);
    }
};
