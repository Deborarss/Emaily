// Importing Passport library
const passport = require('passport');
// Importing Passport Google oauth 2.0 library
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Importing keys
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);  
        console.log('refreshToken', refreshToken); 
        console.log('profile', profile); 
    })
);