module.exports.get = (req, res) => {
    res.status(200).json({
        msg: 'get'
    });
}

module.exports.add = (req, res) => {
    res.status(200).json({
        msg: 'add'
    });
}

module.exports.update = (req, res) => {
    res.status(200).json({
        msg: 'update'
    });
}

module.exports.delete = (req, res) => {
    res.status(200).json({
        msg: 'delete'
    });
}
