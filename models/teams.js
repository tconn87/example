var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamsSchema = Schema({
  name: String,
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  competitions: [{
    type: Schema.Types.ObjectId,
    ref: 'Competitions'
  }]
});

module.exports = mongoose.model('Teams', teamsSchema);