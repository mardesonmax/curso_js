const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Home
route.get('/', homeController.home);
route.post('/', homeController.homePost);

//Contato
route.get('/contato', contatoController.contato)

module.exports = route;