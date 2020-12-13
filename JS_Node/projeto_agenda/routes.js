const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

//Home
route.get('/', homeController.index);

//Login
route.get('/login', loginController.index);
route.post('/login', loginController.login);
route.post('/login/register', loginController.register);

//sair
route.get('/logout', loginController.logout);

module.exports = route;