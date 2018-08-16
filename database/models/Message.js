const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  body: String,
  name: String,
  dateEntered: Date,
});

const Message = mongoose.model('string', messageSchema);

module.exports = Message;
