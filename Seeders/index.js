const mongoose = require('mongoose');
const User = require('../Models/User');
const ChatResponse = require('../Models/ChatResponses');
const connect_DB = require('../Models/connection');
const seedUsers = require('./UserSeed');
const seedChatResponses = require('./ResponseSeed');

connect_DB()
    .then(() => console.log('ready to seed DB'))
    .catch((err) => console.log(err));

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    await ChatResponse.insertMany(seedChatResponses);
    console.log('DB seeded');
};

seedDB().then(() => mongoose.connection.close());
