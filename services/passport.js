// Importing Passport library
const passport = require('passport');
// Importing Passport Google oauth 2.0 library
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Importing mongoose
const mongoose = require('mongoose');
// Importing keys
const keys = require('../config/keys');
// Model class
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // console.log('accessToken', accessToken);  
    // console.log('refreshToken', refreshToken); 
    // console.log('profile', profile); 
    User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
            // We already have a record with the given profile id
            done(null, existingUser);
        } else {
            // We don't have a user record with this id, make a new record
            new User({ googleId: profile.id }).save().then(user => done(null, user));
        }
    });
})
);