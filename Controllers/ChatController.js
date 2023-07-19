const fastCsv = require('fast-csv');
const {getResponse, getAllMessages, listChats} = require('../Services/chatServices');

const getResponses = async (req, res, next) => {
    try {
        const { chat_id, username, userMessage } = req.body;
        const response = await getResponse(chat_id, username, userMessage);
        return res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
};

const getMessages = async (req, res, next) => {
    try {
        const { chat_id } = req.params;
        const messages = await getAllMessages(chat_id);

        const transformer = (doc)=> {
            return {
                username: doc.username,
                message: doc.message,
                timestamp: doc.createdAt
            };
          }
        
          const filename = 'export.csv';
        
          res.setHeader('Content-disposition', `attachment; filename=${filename}`);
          res.writeHead(200, { 'Content-Type': 'text/csv' });
        
          res.flushHeaders();
        
          const csvStream = fastCsv.format({headers: true}).transform(transformer)
          messages.pipe(csvStream).pipe(res);
        return res.status(200);
    } catch (error) {
        next(error);
    }
};

const getChats = async (req, res, next) => {
    try {
        const { username } = req.params;
        const chats = await listChats(username);
        return res.status(200).json({ chats });
    } catch (error) {
        next(error);
    }
};

module.exports = {getResponses, getMessages, getChats};
