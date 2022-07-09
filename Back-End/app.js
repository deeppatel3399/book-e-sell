const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');

const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

require('./db/conn');

app.use(express.json());

app.use(cookieparser());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});