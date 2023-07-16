const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    chat_id: { type: String, required: true },
    user_id: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, required: true },
});
   
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
