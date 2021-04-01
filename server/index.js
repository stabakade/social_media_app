
// if we import without setting module, it will throw error
// import bodyParser from 'body-parser';
// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';

const posts = require('./routes/posts.js');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(cors());

//middleware to connect application
app.use('/posts', posts);

// mongoose db
// id: tempuser
// password: CYlUCSdmhjJu8lVn
const CONNECTION_URL = 'mongodb+srv://tempuser:CYlUCSdmhjJu8lVn@cluster0.aqt2q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// the object is necessary to be there, errors if not there
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))  // listen takes two parameters, port and callback function which is to be run
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);