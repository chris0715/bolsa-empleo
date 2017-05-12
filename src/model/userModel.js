import  mongoose from 'mongoose';
mongoose.Promise = global.Promise;

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true,
    unique: true
  },
  password: String,
  nombre: String
});


export default mongoose.model('userModel',UserSchema);