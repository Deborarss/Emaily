const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./model/User');
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

