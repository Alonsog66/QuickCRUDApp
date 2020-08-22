const db = require('../Models/messageModel.js');
const messageController = {};

messageController.addMessage = async (req, res, next) => {
  const { name, message, time } = req.body;
  const query = `
INSERT INTO messages (Name, Message, Time)
VALUES ('${name}', '${message}', '${time}')
RETURNING *;`;

  const { rows } = await db.query(query);

  res.locals.message = await rows[0];

  next();
};

messageController.getMessages = async (req, res, next) => {
  const query = `
  SELECT *
  FROM messages;
  `;
  const { rows } = await db.query(query);
  res.locals.messages = rows;
  next();
};

messageController.deleteMessage = async (req, res, next) => {
  const { id } = req.body;
  const query = `
  DELETE FROM messages 
  WHERE id = ${id};`;

  const response = await db.query(query);

  res.locals.deleted = await response;

  next();
};

messageController.updateMessage = async (req, res, next) => {
  const { id, message } = req.body;
  const query = `
  UPDATE messages
  SET message = '${message}'
  WHERE id = ${id};`;

  const response = await db.query(query);

  res.locals.updated = await response;

  next();
};

module.exports = messageController;
