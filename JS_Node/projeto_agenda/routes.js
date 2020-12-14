const express = require('express');
const route = express.Router();
const { verifiLogin } = require('./src/middlewares/middleware');
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

//Home
route.get('/', verifiLogin, homeController.index);

//Login
route.get('/login', loginController.index);
route.post('/login', loginController.login);
route.post('/login/register', loginController.register);

//sair
route.get('/logout', loginController.logout);

//Contato
route.get('/contato', verifiLogin, contatoController.index);
route.post('/contato/register', verifiLogin, contatoController.register);
route.get('/contato/:id', verifiLogin, contatoController.edit);

module.exports = route;