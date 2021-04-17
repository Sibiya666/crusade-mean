const express = require('express');
const AuthRout = require('./routes/auth');

const app = express();

app.use('/api/auth', AuthRout);

module.exports = app;