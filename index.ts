const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connect = require('./db/connect');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', require('./routes'));
app.use(express.static(__dirname + '/public')); // Gets CSS working

connect.initDatabase();

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
