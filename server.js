const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

//Mongo
mongoose(process.env.MONGODB_URI, {
    useNewURlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
    }).catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
    });