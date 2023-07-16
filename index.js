const app = require('./resources/app');
const express = require('express');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 80, () => {
	console.log(`App is listening on port ${process.env.PORT || 80}`);
});
