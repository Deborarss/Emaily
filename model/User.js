const mongoose = require('mongoose');
// Destructuring
const { Schema } = mongoose; // same: const Schema = mongoose.Schema
// Schema
const userSchema = new Schema({
  googleId: String
});

// Compiling our schema into a Model
mongoose.model('users', userSchema);
