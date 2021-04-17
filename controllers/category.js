module.exports.get = (req, res) => {
    res.status(200).json({
        msg: 'get'
    });
}

module.exports.getById = (req, res) => {
    res.status(200).json({
        msg: 'getById'
    });
}

module.exports.deleteById = (req, res) => {
    res.status(200).json({
        msg: 'deleteById'
    });
}

module.exports.add = (req, res) => {
    res.status(200).json({
        msg: 'add'
    });
}

module.exports.updateById = (req, res) => {
    res.status(200).json({
        msg: 'updateById'
    });
}