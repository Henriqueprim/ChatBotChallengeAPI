require('dotenv').config();
const mongoose = require('mongoose');

const connect_DB = () =>
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log('connected to DB'))
    .catch((err) => console.log(err));

module.exports = connect_DB;
