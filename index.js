// Importing Express library
const express = require('express');
// Importing mongoose
const mongoose = require('mongoose');
// Importing keys js
const keys = require('./config/keys');
// Importing passport js
require('./services/passport');
// Importing User js
require('./model/User');

// Connecting to mongoDB using mongoose
mongoose.connect(keys.mongoURI);

const app = express();

// Importing authRoutes function and invoke it
require('./routes/authRoutes')(app);


// Dynamic Port Binding (Heroku tell us which port our app will use, so we need to make sure we listen to the port they tell us to)
const PORT = process.env.PORT || 5000;
app.listen(PORT);