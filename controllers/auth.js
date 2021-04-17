module.exports.login = (req, res) => {
    res.status(200).json({
        msg: 'login'
    });
}

module.exports.register = (req, res) => {
    res.status(200).json({
        msg: 'register'
    });
}