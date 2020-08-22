const express = require('express');
const router = express.Router();
const messageController = require('../Controllers/messageController.js');
const cookieController = require('../Controllers/cookieController.js');

router.get(
  '/get-messages',
  cookieController.setCookie,
  messageController.getMessages,
  (req, res) => {
    res.status(200).json(res.locals.messages);
  }
);
router.post(
  '/add-message',
  cookieController.verifyUser,
  messageController.addMessage,
  (req, res) => {
    res.status(200).json(res.locals.message);
  }
);

router.delete(
  '/delete-message',
  cookieController.verifyUser,
  messageController.deleteMessage,
  (req, res) => {
    res.status(200).json(res.locals.deleted);
  }
);

router.put(
  '/update-message',
  cookieController.verifyUser,
  messageController.updateMessage,
  (req, res) => {
    res.status(200).json(res.locals.updated);
  }
);

module.exports = router;
