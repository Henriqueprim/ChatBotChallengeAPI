require('dotenv').config();


const seedSystemUser = [
    {
        username: process.env.SYS_USER,
        password: process.env.SYS_PASSWORD,
    },
];

module.exports = seedSystemUser;
