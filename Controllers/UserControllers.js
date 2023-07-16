const UserService = require('../Services/userServices');
const User = require('../Models/User');

const createUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await UserService.createUser(username, password);
        return res.status(201).json({ user });
    } catch (error) {
        next(error);
    }
}; 

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await UserService.login(username, password);
        return res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

module.exports = { createUser, login };
