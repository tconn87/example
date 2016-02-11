var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  email: String,
  name: String,
  location: String,
  specialty: String
});

module.exports = mongoose.model('User', userSchema);
