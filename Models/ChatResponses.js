const mongoose = require('mongoose');

const ChatResponseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    response: { type: String, required: true },
});

const ChatResponse = mongoose.model('ChatResponse', ChatResponseSchema);

module.exports = ChatResponse;
