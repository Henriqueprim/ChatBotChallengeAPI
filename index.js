const express = require('express');
const connect_DB = require('./Models/connection');
const ErrorHandler = require('./Middlewares/ErrorHandler');

const app = express();
app.use(express.json());
app.use(ErrorHandler);

connect_DB()
    .then(() => app.listen(3000, () => console.log('listening at 3000')))
    .catch((err) => console.log(err));



