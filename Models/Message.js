const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    chat_id: { type: String, required: true },
    username: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true,
    get: time => time.toDateString()
 }
);
   
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
