const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

const RateLimit = require('express-rate-limit');

const limiter = RateLimit({
	windowMs: 15*60*1000,
	max: 500
});

app.use(limiter);

app.get('/', (req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, '../public') });
});

app.get('/css/index.css', (req, res) => {
	res.sendFile('css/index.css', {root: path.join(__dirname, '../public') });
});

module.exports = app;
