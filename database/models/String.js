const mongoose = require('mongoose');
const { Schema } = mongoose;

const stringSchema = new Schema({
  message: String,
  name: String,
  dateEntered: String,
});

const String = mongoose.model('string', stringSchema);

module.exports = String;
