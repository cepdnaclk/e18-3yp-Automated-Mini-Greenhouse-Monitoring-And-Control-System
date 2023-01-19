const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser : true });

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
})

// const messegeRouter = require('./models/routes/messege');
// app.use('/messeges',messegeRouter);

//------------------

const bodyParser = require('body-parser');


app.get('/messages', (req, res) => {
  // Get previous messages from database
  // ...
  res.json(messages);
});

app.post('/messages', (req, res) => {
  const messages = req.body.messages;
  // Save messages to database
  // ...
  res.json({ status: 'success' });
});



//---------------

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});