const mongoose = require('mongoose');
const User = require('../Models/User');

const createUser = async (username, password) => {
    try {
        const registredUser = await User.findOne({ username });
        if (registredUser) {
            throw new Error('User already exists');
        }
        const user = User.create({ username, password });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const login = async (username, password) => {
    try {
        const user = await User.findOne({ username, password });
        if (!user){
            throw new Error('Invalid username or password');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { createUser, login };
