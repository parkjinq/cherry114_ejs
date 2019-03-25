const express = require('express');

const memberController = require('../controller/member');

const routes = express.Router();

routes.get('/getmycm', memberController.getMembers);


module.exports = routes;