const config = require('config');
const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const server = require('./bin/app/server');
const option = require('./bin/app/option');

const app = express();

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
app.use(cors());

app.use(config.get('optionEndpoint'), option);
app.use('/', server);

app.listen(config.get('ports'),
  console.log(`Server : http://localhost:${config.get('ports')}`)
);