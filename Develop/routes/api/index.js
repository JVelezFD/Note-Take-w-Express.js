const express = require('express');
const fs = require('fs');
const router = require('express').router();
const util = require('util');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


