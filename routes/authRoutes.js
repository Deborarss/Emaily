// Importing passport
const passport = require('passport');

// Exporting function
module.exports = app => {
  // Route Handler
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Route Handler
  app.get('/auth/google/callback', passport.authenticate('google'));

  // Route Handler
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
