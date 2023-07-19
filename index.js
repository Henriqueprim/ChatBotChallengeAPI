const express = require('express');
const connect_DB = require('./Models/connection');
const ErrorHandler = require('./Middlewares/ErrorHandler');
const UserRoutes = require('./Routes/UserRoutes');
const ChatRoute = require('./Routes/ChatRoute');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(ErrorHandler);

app.use('/', UserRoutes);
app.use('/chat', ChatRoute);

connect_DB()
    .then(() => app.listen(3001, () => console.log('listening at 3001')))
    .catch((err) => console.log(err));



