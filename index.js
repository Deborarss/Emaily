// Importing Express library
const express = require('express');
// Importing Passport library
const passport = require('passport');
// Importing Passport Google oauth 2.0 library
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Importing keys
const keys = require('./config/keys');

const app = express();


// Dynamic Port Binding (Heroku tell us which port our app will use, so we need to make sure we listen to the port they tell us to)
const PORT = process.env.PORT || 5000;
app.listen(PORT);