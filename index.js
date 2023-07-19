require('dotenv').config();
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

const PORT = process.env.PORT || 3001;

connect_DB()
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((err) => console.log(err));


module.exports = app;
