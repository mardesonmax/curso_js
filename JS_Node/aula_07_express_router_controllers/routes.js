const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//Home
route.get('/', homeController.home);
route.post('/', homeController.homePost);

//Contato
route.get('/contato', contatoController.contato)

module.exports = route;