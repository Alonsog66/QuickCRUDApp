// Add message
const submitMessage = () => {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const time = new Date();
  const body = {
    name,
    message,
    time,
  };
  fetch('/add-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((resp) => console.log(resp));
};

// Get messages
const getMessages = async () => {
  const respJSON = await fetch('get-messages');
  const resp = await respJSON.json();

  resp.reverse().forEach((msg) => appendMessage(msg));
};
getMessages();

// Delete message
const deleteMessage = (id) => {
  const body = {
    id,
  };
  fetch('/delete-message', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((resp) => console.log(resp));
};

const updateMessage = (id) => {
  const message = prompt('Input new message');
  const body = {
    id,
    message,
  };
  fetch('/update-message', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((resp) => console.log(resp));
};

const appendMessage = (msg) => {
  const messages = document.getElementById('message-container');

  // Message Box
  const messageBox = document.createElement('div');
  messageBox.className = 'msg-box';

  // Name div
  const name = document.createElement('div');
  name.textContent = msg.name;
  name.className = 'name';

  // Message Div
  const message = document.createElement('div');
  message.textContent = msg.message;
  message.className = 'message';

  // Time Div
  const time = document.createElement('div');
  time.textContent = msg.time;
  time.className = 'time';

  // Buttons
  const updateBtn = document.createElement('button');
  updateBtn.innerText = 'update';
  updateBtn.onclick = () => updateMessage(msg.id);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'delete';
  deleteBtn.onclick = () => deleteMessage(msg.id);

  // Appending to messageBox
  messageBox.appendChild(name);
  messageBox.appendChild(message);
  messageBox.appendChild(time);
  messageBox.appendChild(updateBtn);
  messageBox.appendChild(deleteBtn);
  messages.appendChild(messageBox);
};
