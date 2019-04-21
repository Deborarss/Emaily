// Importing Express library
const express = require('express');
// Importing mongoose
const mongoose = require('mongoose');
// Importing cookie-session
const cookieSession = require('cookie-session');
// Importing passport
const passport = require('passport');
// Importing keys js
const keys = require('./config/keys');
// Importing User js
require('./model/User');
// Importing passport js
require('./services/passport');

// Connecting to mongoDB using mongoose
mongoose.connect(keys.mongoURI);

const app = express();

// Express handle cookies
app.use(
  cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] }) // 30 days
);

// passport using cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

// Importing authRoutes function and invoke it
require('./routes/authRoutes')(app);

// Dynamic Port Binding (Heroku tell us which port our app will use, so we need to make sure we listen to the port they tell us to)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
