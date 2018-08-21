const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  body: String,
});

const Message = mongoose.model('string', messageSchema);

module.exports = Message;
