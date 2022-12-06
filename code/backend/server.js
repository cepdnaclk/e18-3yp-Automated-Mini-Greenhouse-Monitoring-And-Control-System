const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware')
// const {protect} = require('./middleware/authMiddleware')
const connectDB = require('./config/db')

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// app.use('/api/goals',require('./routes/goalRoutes'));
app.use('/api/users',require('./routes/userRoutes'));
app.use('/api/sensorData',require('./routes/sensorDataRoutes'));
app.use('/api/plantData',require('./routes/plantRoutes'));

// app.use(protect)
app.use(errorHandler);

app.listen(port,() => console.log(`Server Started on Port ${port}`));
