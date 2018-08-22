const Message = require('../models/Message');

module.exports = app => {
  app.get('/messages', async (req, res) => {
    const messages = await Message.find({});
    res.status(200).send(messages);
  });

  app.post('/messages', async (req, res) => {
    const { message } = req.body;
    try {
      const string = await Message.create({ body: message });
      res.status(200).send(string);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
