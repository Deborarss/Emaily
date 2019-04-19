// Importing Express library
const express = require('express');
// Importing passport js
require('./services/passport');

const app = express();

// Importing authRoutes function and invoke it
require('./routes/authRoutes')(app);


// Dynamic Port Binding (Heroku tell us which port our app will use, so we need to make sure we listen to the port they tell us to)
const PORT = process.env.PORT || 5000;
app.listen(PORT);