const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/api');
const homeRoutes = require('./routes/homeRoutes');
const util = require('util');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));