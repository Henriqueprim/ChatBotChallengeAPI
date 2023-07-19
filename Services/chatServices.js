const ChatResponses = require('../Models/ChatResponses');
const Message = require('../Models/Message');
const { greetingsTerms, goodbyeTerms } = require('../Utils/userMessages');

const getResponse = async (chat_id, username, userMessage) => {
    try {
        const message = userMessage.toLowerCase();
        if(username === 'user'){
            const greetingResponse = await ChatResponses.findOne({ title: 'loginMessage' });
            await Message.insertMany(
                { chat_id, username, message: userMessage },
                { chat_id, username: 'system', message: greetingResponse });
            return greetingResponse;
        } else if (greetingsTerms.some((element) => message.includes(element)) && username !== 'user'){
            const greetingResponse = await ChatResponses.findOne({ title: 'greeting' });
            await Message.insertMany(
                { chat_id, username, message: userMessage },
                { chat_id, username: 'system', message: greetingResponse });
            return greetingResponse;
        } else if (goodbyeTerms.some((element) => message.includes(element)) && username !== 'user'){
            const goodbyeResponse = await ChatResponses.findOne({ title: 'goodbye' });
            await Message.insertMany(
                { chat_id, username, message: userMessage },
                { chat_id, username: 'system', message: goodbyeResponse });
            return goodbyeResponse;
        } else if(message.includes('loan') && username !== 'user'){
            const loanResponse = await ChatResponses.findOne({ title: 'loan' });
            await Message.insertMany(
                { chat_id, username, message: userMessage },
                { chat_id, username: 'system', message: loanResponse });
            return loanResponse
        } else {
            const notFound = await ChatResponses.findOne({ title: 'notfound' });
            await Message.insertMany(
                { chat_id, username, message: userMessage },
                { chat_id, username: 'system', message: notFound });
            return notFound;
        }
    }   catch (error) {
        throw new Error(error.message);
    }
};

const getAllMessages = async (chat_id) => {
    try {
        const conversation = await Message.find({ chat_id }).cursor();
        return conversation;
    } catch (error) {
        throw new Error(error.message);
    }
}

const listChats = async (username) => {
    try {
        const chats = await Message.aggregate([
            { $match: { username } },
            { $group: { _id: '$chat_id',
                updatedAt: { $max: "$updatedAt" }
        } },
        ]);
        return chats;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {getResponse, getAllMessages, listChats};
