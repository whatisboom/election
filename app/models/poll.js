var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
  title : {
    type : String,
    default: ''
  },
  slug : {
    type : String,
    default: ''
  }
})

module.exports = mongoose.model('Poll', PollSchema);