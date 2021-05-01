const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const TIME_CONST = require('../constant/time');
const KEYS = require('../config/keys');
const errorHandler = require('../utils/error-handler');

const SALT_LENGTH = 10;

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (!candidate) {
        res.status('401').json({ msg: 'user not found' });
        return;
    }

    const isCorrectPassword = await bcrypt.compare(
        password,
        candidate.password
    );

    if (!isCorrectPassword) {
        res.status('401').json({ msg: 'password error' });
        return;
    }

    const token = jwt.sign(
        {
            email: candidate.email,
            userId: candidate._id,
        },
        KEYS.JWT,
        { expiresIn: TIME_CONST.ONE_HOUR }
    );

    res.status(200).json({ token: `Bearer ${token}` });
};

module.exports.register = async (req, res) => {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
        res.status(409).json({
            msg: 'This email is busy.',
        });
        return;
    }

    const passwordHash = await bcrypt.hash(password, SALT_LENGTH);
    const user = new User({
        email,
        password: passwordHash,
    });

    try {
        await user.save();
        res.status(201).json({ user });
    } catch (e) {
        errorHandler.response(res, e);
    }
};
