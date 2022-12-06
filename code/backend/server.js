const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5050;
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/api/users',require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port,() => console.log(`Server Started on Port ${port}`));
