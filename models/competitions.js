var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var competitionsSchema = Schema({
  name: String,
  description: String,
  objective: String,
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Teams'
  }]
});

module.exports = mongoose.model('Competitions', competitionsSchema);