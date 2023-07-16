const express = require('express');
const UserControllers = require('../Controllers/UserControllers');

const router = express.Router();

router.post('/register', UserControllers.createUser);
router.post('/login', UserControllers.login);

module.exports = router;
