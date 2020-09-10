const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./models/');

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`listenning on ${PORT}`);
});