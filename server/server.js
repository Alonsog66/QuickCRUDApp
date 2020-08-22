const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const messageRoute = require('./Router/router.js');

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static('client'));
app.use('/', messageRoute);

app.listen(port, () => {
  console.log(`Connected to port ${port}!!`);
});
