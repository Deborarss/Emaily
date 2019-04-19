// Route Handler
app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'] 
    }
));

// Route Handler
app.get('/auth/google/callback', passport.authenticate('google'));