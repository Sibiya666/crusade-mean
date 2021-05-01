module.exports.overview = (req, res) => {
    res.status(200).json({
        msg: 'overview',
    });
};

module.exports.analytics = (req, res) => {
    res.status(200).json({
        msg: 'analytics',
    });
};
