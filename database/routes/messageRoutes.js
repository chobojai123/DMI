const Message = require('../models/Message');

module.exports = app => {
  app.get('/messages', async (req, res) => {
    const messages = await Message.find({});
    res.status(200).send('got');
  });

  // app.get('/messages/test', (req, res) => {
  //   res.status(200).send('got');
  // });

  // app.post('/messages/test', (req, res) => {
  //   res.send('Thanks for posting!!');
  // });

  app.post('/messages', async (req, res) => {
    const { body, name } = req.body;

    const message = new Message({
      body,
      name,
      dateEntered: Date.now(),
    });

    try {
      await survey.save();
      res.send('Saved successfully');
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
