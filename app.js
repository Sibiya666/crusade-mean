const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');

const AuthRout = require('./routes/auth');
const AnalyticsRout = require('./routes/analytics');
const CategoryRout = require('./routes/category');
const PositionRout = require('./routes/position');
const OrderRout = require('./routes/order');

const passportMiddleware = require('./middleware/passport');
const KEYS = require('./config/keys');

const app = express();

mongoose
    .connect(KEYS.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('connect DB'))
    .catch(() => console.error('connect DB error'));

app.use(passport.initialize());
passportMiddleware(passport);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.use('/api/auth', AuthRout);
app.use('/api/analytics', AnalyticsRout);
app.use('/api/category', CategoryRout);
app.use('/api/position', PositionRout);
app.use('/api/order', OrderRout);

module.exports = app;
