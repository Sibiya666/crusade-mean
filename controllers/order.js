module.exports.get = (req, res) => {
    res.status(200).json({
        msg: 'get',
    });
};

module.exports.add = (req, res) => {
    res.status(200).json({
        msg: 'add',
    });
};
