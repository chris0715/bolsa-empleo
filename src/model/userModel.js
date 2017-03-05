const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


export default mongoose.model('userModel',UserSchema);