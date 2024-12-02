const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./routes/user.routes');
const conntectToDb = require('./db/db')

conntectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', authRoute);

module.exports = app;