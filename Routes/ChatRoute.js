const express = require('express');
const {getResponses, getMessages, getChats} = require('../Controllers/ChatController');

const router = express.Router();


router.post('/', getResponses);
router.get('/conversations/:username', getChats)
router.get('/conversations/:username/:chat_id', getMessages)


module.exports = router;
